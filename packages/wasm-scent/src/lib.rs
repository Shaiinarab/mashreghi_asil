use wasm_bindgen::prelude::*;
use serde::{Deserialize, Serialize};
use std::collections::HashMap;

// Import the `console.log` function from the `console` module
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

// Define a macro to make console.log easier to use
macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ScentProfile {
    pub top_notes: Vec<String>,
    pub heart_notes: Vec<String>,
    pub base_notes: Vec<String>,
    pub accords: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ScentVector {
    pub floral: f64,
    pub citrus: f64,
    pub woody: f64,
    pub oriental: f64,
    pub fresh: f64,
    pub sweet: f64,
    pub spicy: f64,
    pub aquatic: f64,
}

#[wasm_bindgen]
pub struct ScentAnalyzer {
    scent_database: HashMap<String, ScentVector>,
}

#[wasm_bindgen]
impl ScentAnalyzer {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        console_log!("Initializing Scent Analyzer");
        
        let mut database = HashMap::new();
        
        // Initialize with some sample scent profiles
        database.insert("rose".to_string(), ScentVector {
            floral: 0.9, citrus: 0.1, woody: 0.2, oriental: 0.3,
            fresh: 0.4, sweet: 0.7, spicy: 0.1, aquatic: 0.0,
        });
        
        database.insert("jasmine".to_string(), ScentVector {
            floral: 0.95, citrus: 0.05, woody: 0.1, oriental: 0.4,
            fresh: 0.2, sweet: 0.8, spicy: 0.05, aquatic: 0.0,
        });
        
        database.insert("bergamot".to_string(), ScentVector {
            floral: 0.1, citrus: 0.9, woody: 0.1, oriental: 0.2,
            fresh: 0.8, sweet: 0.3, spicy: 0.1, aquatic: 0.0,
        });
        
        database.insert("sandalwood".to_string(), ScentVector {
            floral: 0.1, citrus: 0.0, woody: 0.95, oriental: 0.6,
            fresh: 0.1, sweet: 0.4, spicy: 0.2, aquatic: 0.0,
        });
        
        database.insert("vanilla".to_string(), ScentVector {
            floral: 0.2, citrus: 0.0, woody: 0.3, oriental: 0.8,
            fresh: 0.1, sweet: 0.95, spicy: 0.1, aquatic: 0.0,
        });
        
        ScentAnalyzer {
            scent_database: database,
        }
    }
    
    /// Analyze scent notes and return a vector representation
    #[wasm_bindgen]
    pub fn analyze_scent_notes(&self, notes: &str) -> Result<String, JsValue> {
        console_log!("Analyzing scent notes: {}", notes);
        
        let profile = self.parse_scent_profile(notes);
        let vector = self.profile_to_vector(&profile);
        
        match serde_json::to_string(&vector) {
            Ok(json) => Ok(json),
            Err(e) => Err(JsValue::from_str(&format!("Serialization error: {}", e))),
        }
    }
    
    /// Calculate similarity between two scent profiles
    #[wasm_bindgen]
    pub fn calculate_similarity(&self, profile1: &str, profile2: &str) -> Result<f64, JsValue> {
        console_log!("Calculating similarity between: {} and {}", profile1, profile2);
        
        let vector1 = self.parse_scent_vector(profile1)?;
        let vector2 = self.parse_scent_vector(profile2)?;
        
        let similarity = self.cosine_similarity(&vector1, &vector2);
        Ok(similarity)
    }
    
    /// Get scent recommendations based on a profile
    #[wasm_bindgen]
    pub fn get_recommendations(&self, user_profile: &str, available_scents: &str) -> Result<String, JsValue> {
        console_log!("Getting recommendations for profile: {}", user_profile);
        
        let user_vector = self.parse_scent_vector(user_profile)?;
        let available: Vec<String> = serde_json::from_str(available_scents)
            .map_err(|e| JsValue::from_str(&format!("Parse error: {}", e)))?;
        
        let mut similarities: Vec<(String, f64)> = available
            .iter()
            .map(|scent| {
                if let Ok(profile) = self.analyze_scent_notes(scent) {
                    if let Ok(vector) = self.parse_scent_vector(&profile) {
                        let similarity = self.cosine_similarity(&user_vector, &vector);
                        (scent.clone(), similarity)
                    } else {
                        (scent.clone(), 0.0)
                    }
                } else {
                    (scent.clone(), 0.0)
                }
            })
            .collect();
        
        similarities.sort_by(|a, b| b.1.partial_cmp(&a.1).unwrap());
        similarities.truncate(5); // Return top 5 recommendations
        
        match serde_json::to_string(&similarities) {
            Ok(json) => Ok(json),
            Err(e) => Err(JsValue::from_str(&format!("Serialization error: {}", e))),
        }
    }
}

impl ScentAnalyzer {
    fn parse_scent_profile(&self, notes: &str) -> ScentProfile {
        let notes_lower = notes.to_lowercase();
        let note_words: Vec<&str> = notes_lower.split_whitespace().collect();
        
        let mut top_notes = Vec::new();
        let mut heart_notes = Vec::new();
        let mut base_notes = Vec::new();
        let mut accords = Vec::new();
        
        for word in note_words {
            if let Some(vector) = self.scent_database.get(word) {
                // Classify notes based on their characteristics
                if vector.fresh > 0.7 || vector.citrus > 0.7 {
                    top_notes.push(word.to_string());
                } else if vector.woody > 0.7 || vector.oriental > 0.7 {
                    base_notes.push(word.to_string());
                } else {
                    heart_notes.push(word.to_string());
                }
                
                // Add accord classification
                if vector.floral > 0.7 { accords.push("floral".to_string()); }
                if vector.citrus > 0.7 { accords.push("citrus".to_string()); }
                if vector.woody > 0.7 { accords.push("woody".to_string()); }
                if vector.oriental > 0.7 { accords.push("oriental".to_string()); }
                if vector.fresh > 0.7 { accords.push("fresh".to_string()); }
                if vector.sweet > 0.7 { accords.push("sweet".to_string()); }
                if vector.spicy > 0.7 { accords.push("spicy".to_string()); }
                if vector.aquatic > 0.7 { accords.push("aquatic".to_string()); }
            }
        }
        
        // Remove duplicates
        top_notes.sort();
        top_notes.dedup();
        heart_notes.sort();
        heart_notes.dedup();
        base_notes.sort();
        base_notes.dedup();
        accords.sort();
        accords.dedup();
        
        ScentProfile {
            top_notes,
            heart_notes,
            base_notes,
            accords,
        }
    }
    
    fn profile_to_vector(&self, profile: &ScentProfile) -> ScentVector {
        let mut vector = ScentVector {
            floral: 0.0, citrus: 0.0, woody: 0.0, oriental: 0.0,
            fresh: 0.0, sweet: 0.0, spicy: 0.0, aquatic: 0.0,
        };
        
        let all_notes: Vec<String> = [
            profile.top_notes.clone(),
            profile.heart_notes.clone(),
            profile.base_notes.clone(),
        ].concat();
        
        for note in all_notes {
            if let Some(note_vector) = self.scent_database.get(&note) {
                vector.floral += note_vector.floral;
                vector.citrus += note_vector.citrus;
                vector.woody += note_vector.woody;
                vector.oriental += note_vector.oriental;
                vector.fresh += note_vector.fresh;
                vector.sweet += note_vector.sweet;
                vector.spicy += note_vector.spicy;
                vector.aquatic += note_vector.aquatic;
            }
        }
        
        // Normalize the vector
        let count = all_notes.len() as f64;
        if count > 0.0 {
            vector.floral /= count;
            vector.citrus /= count;
            vector.woody /= count;
            vector.oriental /= count;
            vector.fresh /= count;
            vector.sweet /= count;
            vector.spicy /= count;
            vector.aquatic /= count;
        }
        
        vector
    }
    
    fn parse_scent_vector(&self, json: &str) -> Result<ScentVector, JsValue> {
        serde_json::from_str(json)
            .map_err(|e| JsValue::from_str(&format!("Parse error: {}", e)))
    }
    
    fn cosine_similarity(&self, a: &ScentVector, b: &ScentVector) -> f64 {
        let dot_product = a.floral * b.floral +
                         a.citrus * b.citrus +
                         a.woody * b.woody +
                         a.oriental * b.oriental +
                         a.fresh * b.fresh +
                         a.sweet * b.sweet +
                         a.spicy * b.spicy +
                         a.aquatic * b.aquatic;
        
        let magnitude_a = (a.floral * a.floral +
                          a.citrus * a.citrus +
                          a.woody * a.woody +
                          a.oriental * a.oriental +
                          a.fresh * a.fresh +
                          a.sweet * a.sweet +
                          a.spicy * a.spicy +
                          a.aquatic * a.aquatic).sqrt();
        
        let magnitude_b = (b.floral * b.floral +
                          b.citrus * b.citrus +
                          b.woody * b.woody +
                          b.oriental * b.oriental +
                          b.fresh * b.fresh +
                          b.sweet * b.sweet +
                          b.spicy * b.spicy +
                          b.aquatic * b.aquatic).sqrt();
        
        if magnitude_a == 0.0 || magnitude_b == 0.0 {
            0.0
        } else {
            dot_product / (magnitude_a * magnitude_b)
        }
    }
}

// Export a simple function for direct use
#[wasm_bindgen]
pub fn analyze_scent_similarity(scent1: &str, scent2: &str) -> f64 {
    let analyzer = ScentAnalyzer::new();
    
    match analyzer.calculate_similarity(scent1, scent2) {
        Ok(similarity) => similarity,
        Err(_) => 0.0,
    }
}


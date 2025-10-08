"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Floral", "Fresh", "Oriental", "Woody", "Citrus", "Spicy"];
const brands = ["All", "Luxury Essence", "Aqua Fragrance", "Oriental Scents", "Forest Essence", "Fresh Scents"];
const priceRanges = [
  { label: "All Prices", min: 0, max: 1000 },
  { label: "Under $200", min: 0, max: 200 },
  { label: "$200 - $300", min: 200, max: 300 },
  { label: "$300 - $400", min: 300, max: 400 },
  { label: "Over $400", min: 400, max: 1000 },
];

export default function ProductFilters() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All Prices");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleClearFilters = () => {
    setSelectedCategory("All");
    setSelectedBrand("All");
    setSelectedPriceRange("All Prices");
    setInStockOnly(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
        <Button variant="ghost" size="sm" onClick={handleClearFilters}>
          Clear All
        </Button>
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Brand</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center">
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center">
              <input
                type="radio"
                name="priceRange"
                value={range.label}
                checked={selectedPriceRange === range.label}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div>
        <h3 className="font-medium text-gray-900 mb-3">Availability</h3>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
        </label>
      </div>

      {/* Apply Filters Button */}
      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
        Apply Filters
      </Button>
    </div>
  );
}


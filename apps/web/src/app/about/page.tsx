import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Luxury Perfume Shop",
  description: "Learn about our passion for exquisite fragrances and our commitment to bringing you the world's finest perfumes.",
  openGraph: {
    title: "About Us | Luxury Perfume Shop",
    description: "Learn about our passion for exquisite fragrances and our commitment to bringing you the world's finest perfumes.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-purple-100">
            Crafting memories through the art of fragrance
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2003, our perfume shop began as a small family business with a simple mission: 
                to bring the world's most exceptional fragrances to discerning customers who appreciate 
                the art and craftsmanship of fine perfumery.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the past two decades, we have carefully curated a collection of over 500 premium 
                fragrances from renowned houses around the globe. Each scent in our collection tells 
                a unique story and represents the pinnacle of olfactory artistry.
              </p>
              <p className="text-lg text-gray-600">
                Our team of fragrance experts travels the world to discover new and exciting scents, 
                ensuring that our customers always have access to the latest and most exclusive 
                fragrances on the market.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl">🌸</span>
                  </div>
                  <p className="text-gray-700 font-medium">Two Decades of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600">
                We source only the finest fragrances from established and emerging perfumers, 
                ensuring every product meets our exacting standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service</h3>
              <p className="text-gray-600">
                Our knowledgeable staff provides personalized recommendations and expert 
                guidance to help you find your perfect scent.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We continuously strive to exceed expectations, offering an exceptional 
                shopping experience both in-store and online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">By the Numbers</h2>
            <p className="text-xl text-gray-600">
              Our journey in numbers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">20+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <p className="text-gray-600">Premium Fragrances</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <p className="text-gray-600">Brand Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate experts behind our curated collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">SM</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Martinez</h3>
              <p className="text-purple-600 mb-4">Chief Curator</p>
              <p className="text-gray-600">
                With over 15 years in the fragrance industry, Sarah leads our curation team 
                and ensures every scent meets our exacting standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">MJ</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Johnson</h3>
              <p className="text-purple-600 mb-4">Fragrance Expert</p>
              <p className="text-gray-600">
                Michael's deep knowledge of scent notes and composition helps customers 
                find their perfect fragrance match.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">EL</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Emma Liu</h3>
              <p className="text-purple-600 mb-4">Customer Experience</p>
              <p className="text-gray-600">
                Emma ensures every customer receives personalized attention and leaves 
                with not just a fragrance, but a memorable experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


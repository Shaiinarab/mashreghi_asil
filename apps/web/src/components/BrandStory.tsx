export default function BrandStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              For over two decades, we have been curating the world's most exceptional fragrances, 
              bringing together traditional craftsmanship with modern innovation.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Each perfume in our collection tells a unique story, crafted by master perfumers 
              who understand that scent is more than just an accessory—it's an expression of identity.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-purple-600 mb-2">20+</h3>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-600 mb-2">500+</h3>
                <p className="text-gray-600">Premium Fragrances</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl">🌸</span>
                </div>
                <p className="text-gray-700 font-medium">Crafting Memories Through Scent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

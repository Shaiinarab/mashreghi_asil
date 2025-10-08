import ProductCard from "@/components/ProductCard";

const featuredProducts = [
  {
    id: "1",
    name: "Midnight Rose",
    brand: "Luxury Essence",
    price: 299,
    image: "/images/midnight-rose.jpg",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2", 
    name: "Ocean Breeze",
    brand: "Aqua Fragrance",
    price: 249,
    image: "/images/ocean-breeze.jpg",
    rating: 4.6,
    reviews: 89,
  },
  {
    id: "3",
    name: "Golden Amber",
    brand: "Oriental Scents",
    price: 349,
    image: "/images/golden-amber.jpg",
    rating: 4.9,
    reviews: 156,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">Handpicked fragrances that define luxury</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

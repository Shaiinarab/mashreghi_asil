"use client";

import ProductCard from "@/components/ProductCard";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

interface YouMayAlsoLikeProps {
  currentProductId: string;
}

const relatedProducts: Product[] = [
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
  {
    id: "4",
    name: "Velvet Orchid",
    brand: "Luxury Essence",
    price: 279,
    image: "/images/velvet-orchid.jpg",
    rating: 4.7,
    reviews: 98,
  },
];

export default function YouMayAlsoLike({ currentProductId }: YouMayAlsoLikeProps) {
  // Filter out the current product
  const filteredProducts = relatedProducts.filter(p => p.id !== currentProductId);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">You May Also Like</h2>
          <p className="text-lg text-gray-600">
            Discover more fragrances that complement your style
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}


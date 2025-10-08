import { Metadata } from "next";
import ProductFilters from "@/components/ProductFilters";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "All Products | Luxury Perfume Shop",
  description: "Browse our complete collection of luxury fragrances from the world's finest perfumers.",
  openGraph: {
    title: "All Products | Luxury Perfume Shop",
    description: "Browse our complete collection of luxury fragrances from the world's finest perfumers.",
  },
};

const allProducts = [
  {
    id: "1",
    name: "Midnight Rose",
    brand: "Luxury Essence",
    price: 299,
    image: "/images/midnight-rose.jpg",
    rating: 4.8,
    reviews: 124,
    category: "Floral",
    inStock: true,
  },
  {
    id: "2",
    name: "Ocean Breeze",
    brand: "Aqua Fragrance",
    price: 249,
    image: "/images/ocean-breeze.jpg",
    rating: 4.6,
    reviews: 89,
    category: "Fresh",
    inStock: true,
  },
  {
    id: "3",
    name: "Golden Amber",
    brand: "Oriental Scents",
    price: 349,
    image: "/images/golden-amber.jpg",
    rating: 4.9,
    reviews: 156,
    category: "Oriental",
    inStock: true,
  },
  {
    id: "4",
    name: "Velvet Orchid",
    brand: "Luxury Essence",
    price: 279,
    image: "/images/velvet-orchid.jpg",
    rating: 4.7,
    reviews: 98,
    category: "Floral",
    inStock: true,
  },
  {
    id: "5",
    name: "Mystic Woods",
    brand: "Forest Essence",
    price: 329,
    image: "/images/mystic-woods.jpg",
    rating: 4.5,
    reviews: 67,
    category: "Woody",
    inStock: false,
  },
  {
    id: "6",
    name: "Citrus Burst",
    brand: "Fresh Scents",
    price: 199,
    image: "/images/citrus-burst.jpg",
    rating: 4.4,
    reviews: 143,
    category: "Citrus",
    inStock: true,
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
          <p className="text-lg text-gray-600">
            Discover our complete collection of luxury fragrances
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ProductFilters />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <ProductGrid products={allProducts} />
          </div>
        </div>
      </div>
    </main>
  );
}


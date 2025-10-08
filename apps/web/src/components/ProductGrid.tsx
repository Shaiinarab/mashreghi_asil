import ProductCard from "@/components/ProductCard";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  inStock: boolean;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div>
      {/* Sort and View Options */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          Showing {products.length} products
        </p>
        <div className="flex items-center gap-4">
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
            <option>Newest</option>
          </select>
          <div className="flex border border-gray-300 rounded-md">
            <button className="px-3 py-2 border-r border-gray-300 bg-gray-50">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </button>
            <button className="px-3 py-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-12">
        <div className="flex items-center space-x-2">
          <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700">
            Previous
          </button>
          <button className="px-3 py-2 bg-purple-600 text-white rounded-md text-sm font-medium">
            1
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
            2
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
            3
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}


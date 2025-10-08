import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <span className="text-4xl">🌸</span>
      </div>
      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
          <p className="text-gray-600">{product.brand}</p>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

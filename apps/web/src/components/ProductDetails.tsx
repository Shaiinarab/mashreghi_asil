"use client";

import { useState } from "react";
import { Star, Heart, Share2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  accords: string[];
  variants: {
    id: string;
    size: string;
    price: number;
    stock: number;
  }[];
}

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log("Adding to cart:", {
      productId: product.id,
      variantId: selectedVariant.id,
      quantity,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-white rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
              <span className="text-6xl">🌸</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? "border-purple-500" : "border-gray-200"
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <span className="text-2xl">🌸</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{product.brand}</Badge>
              {product.inStock && (
                <Badge variant="default" className="bg-green-100 text-green-800">
                  In Stock
                </Badge>
              )}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          {/* Scent Notes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Scent Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Top Notes</h4>
                <div className="flex flex-wrap gap-1">
                  {product.notes.top.map((note) => (
                    <Badge key={note} variant="outline" className="text-xs">
                      {note}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Heart Notes</h4>
                <div className="flex flex-wrap gap-1">
                  {product.notes.heart.map((note) => (
                    <Badge key={note} variant="outline" className="text-xs">
                      {note}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Base Notes</h4>
                <div className="flex flex-wrap gap-1">
                  {product.notes.base.map((note) => (
                    <Badge key={note} variant="outline" className="text-xs">
                      {note}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Variants */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`p-3 border rounded-lg text-center ${
                    selectedVariant.id === variant.id
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-medium">{variant.size}</div>
                  <div className="text-sm text-gray-600">${variant.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label className="font-medium text-gray-700">Quantity:</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-gray-300 rounded-md px-3 py-2"
              >
                {[...Array(Math.min(10, selectedVariant.stock))].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - ${selectedVariant.price * quantity}
              </Button>
              
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5" />
              </Button>
              
              <Button variant="outline" size="lg">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


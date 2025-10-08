"use client";

import { useState } from "react";
import { Star, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  body: string;
  helpfulCount: number;
  createdAt: string;
  isVerified: boolean;
}

interface ProductReviewsProps {
  productId: string;
}

const mockReviews: Review[] = [
  {
    id: "1",
    userId: "user1",
    userName: "Sarah M.",
    rating: 5,
    title: "Absolutely divine!",
    body: "This perfume is exactly what I was looking for. The rose notes are so elegant and the sandalwood base gives it such sophistication. Lasts all day too!",
    helpfulCount: 12,
    createdAt: "2024-01-15",
    isVerified: true,
  },
  {
    id: "2",
    userId: "user2",
    userName: "Michael K.",
    rating: 4,
    title: "Beautiful scent, but...",
    body: "Love the fragrance itself, very luxurious and well-balanced. My only complaint is that it doesn't last as long as I'd hoped for the price point.",
    helpfulCount: 8,
    createdAt: "2024-01-10",
    isVerified: true,
  },
  {
    id: "3",
    userId: "user3",
    userName: "Emma L.",
    rating: 5,
    title: "Perfect for special occasions",
    body: "I wore this to a wedding and received so many compliments! The jasmine heart notes are gorgeous and it has such an expensive, high-end feel.",
    helpfulCount: 15,
    createdAt: "2024-01-08",
    isVerified: false,
  },
];

export default function ProductReviews({ productId }: ProductReviewsProps) {
  const [reviews] = useState<Review[]>(mockReviews);
  const [filter, setFilter] = useState<"all" | "verified">("all");

  const filteredReviews = reviews.filter(review => 
    filter === "all" || review.isVerified
  );

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Customer Reviews</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(averageRating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium text-gray-900">
                  {averageRating.toFixed(1)}
                </span>
                <span className="text-gray-600">({totalReviews} reviews)</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All Reviews
            </Button>
            <Button
              variant={filter === "verified" ? "default" : "outline"}
              onClick={() => setFilter("verified")}
            >
              Verified Purchases
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">
                      {review.userName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{review.userName}</span>
                      {review.isVerified && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <h4 className="font-medium text-gray-900 mb-1">{review.title}</h4>
                <p className="text-gray-700 leading-relaxed">{review.body}</p>
              </div>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                  <ThumbsUp className="w-4 h-4" />
                  Helpful ({review.helpfulCount})
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No reviews found for the selected filter.</p>
          </div>
        )}

        <div className="mt-8 text-center">
          <Button variant="outline">Load More Reviews</Button>
        </div>
      </div>
    </section>
  );
}


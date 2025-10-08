import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import ProductReviews from "@/components/ProductReviews";
import YouMayAlsoLike from "@/components/YouMayAlsoLike";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

// Mock product data - in real app, this would come from API
const getProduct = async (slug: string) => {
  const products = [
    {
      id: "1",
      slug: "midnight-rose",
      name: "Midnight Rose",
      brand: "Luxury Essence",
      price: 299,
      description: "A captivating blend of dark roses and mysterious woods, perfect for evening wear. This intoxicating fragrance opens with fresh bergamot and pink pepper, evolving into a heart of Turkish rose and jasmine, before settling into a warm base of sandalwood and vanilla.",
      images: [
        "/images/midnight-rose-1.jpg",
        "/images/midnight-rose-2.jpg",
        "/images/midnight-rose-3.jpg",
      ],
      rating: 4.8,
      reviewCount: 124,
      inStock: true,
      notes: {
        top: ["Bergamot", "Pink Pepper"],
        heart: ["Turkish Rose", "Jasmine", "Lily of the Valley"],
        base: ["Sandalwood", "Vanilla", "Musk"],
      },
      accords: ["Floral", "Oriental", "Woody"],
      variants: [
        { id: "30ml", size: "30ml", price: 199, stock: 15 },
        { id: "50ml", size: "50ml", price: 299, stock: 8 },
        { id: "100ml", size: "100ml", price: 449, stock: 3 },
      ],
    },
  ];

  return products.find(p => p.slug === slug) || null;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(params.slug);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} by ${product.brand} | Luxury Perfume Shop`,
    description: product.description,
    keywords: [...product.accords, ...product.notes.top, ...product.notes.heart, ...product.notes.base],
    openGraph: {
      title: `${product.name} by ${product.brand}`,
      description: product.description,
      images: product.images,
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} by ${product.brand}`,
      description: product.description,
      images: product.images,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <ProductDetails product={product} />
      <ProductReviews productId={product.id} />
      <YouMayAlsoLike currentProductId={product.id} />
    </main>
  );
}


export interface Product {
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

export interface Review {
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

export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  quantity: number;
  price: number;
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  isVerified: boolean;
}

export interface Order {
  id: string;
  userId: string;
  status: string;
  totalAmount: number;
  currency: string;
  items: OrderItem[];
  shippingAddress?: any;
  billingAddress?: any;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  variantId?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

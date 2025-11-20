export interface Product {
  id: number;
  badge?: { text: string; color: 'red' | 'blue' | 'green' | 'orange' };
  image: string;
  category: string;
  title: string;
  rating: number;
  brand: string;
  price: number;
  oldPrice?: number;
}

export interface BestSellerProps {
  product: {
    tag?: { text: string; color: string };
    image: string;
    category: string;
    title: string;
    rating: number;
    price: number;
    oldPrice: number;
  }
}

export interface DealProps {
  product: {
    bgImage: string;
    title: string;
    brand: string;
    rating: number;
    price: number;
    oldPrice: number;
  }
}
export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number | null;
  category: string;
  collection: string;
  color: string;
  image: string;
  description: string;
  sourceUrl: string;
}

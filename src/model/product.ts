export default interface Product {
    id: number;
    name: string;
    description?: string;
    picture: string;
    category: string;
    price: number;
    discount?: number;
    stock: number;
  }
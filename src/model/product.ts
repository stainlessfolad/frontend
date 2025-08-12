export default interface Product {
  id: number;
  name: string;
  dim: Array<Number>;
  thickness: number;
  description?: string;
  picture?: string;
}

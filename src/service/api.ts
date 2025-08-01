import axios from "axios";
import type Product from "../model/product";

const api = axios.create({
  baseURL: "https://stainlessfolad.ir/api/",
});

export const getProducts = async () => {
  try {
    const res = await api.get("products");
    const data = res.data as Product[];
    if (data == null) throw new Error("missing product info");
    return data;
  } catch (err) {
    if (err instanceof Error)
      throw new Error("Error in fetching products: " + err.message);
    return [];
  }
};

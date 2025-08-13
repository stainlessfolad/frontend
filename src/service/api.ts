import axios from "axios";
import type Product from "../model/product";
import type Message from "../model/message";

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
      throw new Error("Failed to fetch products: " + err.message);

    return [];
  }
};

export const postMessage = async (data: Message) => {
  try {
    const res = await api.post("messages", data);
    if (res.status == 201) {
      console.log("Message Sent successfully!");
      return true;
    } else {
      throw new Error("Form submission failed!");
    }
  } catch (err) {
    if (err instanceof Error)
      throw new Error("Failed to send message: " + err.message);
  }
};

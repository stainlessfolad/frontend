import axios from "axios";
import type Product from "../model/product";
import type Message from "../model/message";

const api = axios.create({
  baseURL: "https://steelbabak.ir/api/",
});

export const getProducts = async () => {
  try {
    const res = await api.get("products/");
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
    const res = await api.post("messages/", JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      withXSRFToken: true,
    });
    if (res.status == 201) {
      console.log("Message Sent successfully!");
      return true;
    }
  } catch (err) {
    if (err instanceof Error)
      throw new Error("Failed to send message: " + err.message);
  }
};

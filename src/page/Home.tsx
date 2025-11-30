import { useState, useEffect } from "react";
import { getProducts } from "../service/api";
import type Product from "../model/product";
import Hero from "../components/home/Hero";
import ProductUsecaseSection from "../components/home/ProductUsecaseSection";
import ProductCarouselSection from "../components/home/ProductCarouselSection";
import ShopBenefitsSection from "../components/home/ShopBenefitsSection";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((products: Product[]) => {
      setProducts(products);
    });
  }, []);

  return (
    <>
      <Hero />
      <ProductUsecaseSection />
      <ProductCarouselSection products={products} />
      <ShopBenefitsSection />
    </>
  );
}

export default HomePage;

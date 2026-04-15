import React from "react";
import Footer from "../components/Footer";
import { useProductStore } from "../../feauters/useProductStore";
import { useEffect } from "react";
import ErrorAlert from "../components/ErrorAlert";
import ProductsSection from "../components/ProductsSection";
import WirelessSection from "../components/WirelessSection";
import PerformanceSection from "../components/PerformanceSection";
import FeautersSection from "../components/FeautersSection";
import HeroSection from "../components/HeroSection";

export default function HomePage() {
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const error = useProductStore((state) => state.error);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {error && <ErrorAlert message={error} />}
      <HeroSection />
      <FeautersSection />
      <PerformanceSection />
      <WirelessSection />
      <ProductsSection />
      <Footer />
    </>
  );
}

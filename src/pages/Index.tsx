import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductInfo from "@/components/ProductInfo";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CoFounders from "@/components/CoFounders";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductInfo />
      <Features />
      <About />
      <CoFounders />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

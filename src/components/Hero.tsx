import React from "react";
import { Button } from "@/components/ui/button";
import { Droplet } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 -z-10"></div>

      {/* Animated water droplets */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-20 bg-soco-blue-light rounded-full animate-water-ripple -z-10"></div>
      <div className="absolute top-1/3 left-1/3 w-48 h-48 opacity-10 bg-soco-green-light rounded-full animate-water-ripple animation-delay-1000 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-soco-green-light/20 text-soco-green-dark text-sm font-medium mb-6">
              <Droplet className="w-4 h-4 mr-1" />
              <span>Revolutionizing Soil Technology</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Nature-Inspired <br />
              <span className="text-soco-blue-dark">Water Retention</span>{" "}
              <br />
              Technology
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
              Our eco-friendly hydrogel improves soil water retention, enhancing
              plant growth while using less water. A sustainable solution for
              modern agriculture.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-soco-green-dark hover:bg-soco-green-light text-white px-8"
              >
                Get Started
              </Button>
              <Button
                onClick={() =>
                  document
                    .getElementById("product")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="outline"
                size="lg"
                className="border-soco-blue-dark text-soco-blue-dark hover:bg-soco-blue-dark hover:text-white px-8"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="bg-white rounded-full p-6 shadow-xl relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center animate-float">
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-soco-blue-light/30 to-soco-green-light/30"></div>
              <div className="w-full h-full rounded-full bg-gradient-to-br from-soco-blue-light to-soco-green-light opacity-80 blur-md absolute"></div>
              <div className="bg-white/90 w-4/5 h-4/5 rounded-full flex items-center justify-center relative z-10 shadow-inner">
                <span className="font-serif font-bold text-4xl bg-gradient-to-r from-soco-green-dark to-soco-blue-dark bg-clip-text text-transparent">
                  Eco Gel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

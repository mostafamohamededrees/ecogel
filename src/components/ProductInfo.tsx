import React from "react";
import { Droplet, Sprout, Droplets } from "lucide-react";

const ProductInfo = () => {
  return (
    <section id="product" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our Hydrogel Technology
          </h2>
          <p className="text-gray-600 text-lg">
            An innovative superabsorbent polymer designed to revolutionize how
            plants access and utilize water in soil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-soco-green-light/10 to-soco-blue-light/10 p-6 rounded-lg">
                <h3 className="font-serif font-bold text-xl mb-3 text-soco-green-dark">
                  What is Eco Hydrogel?
                </h3>
                <p>
                  Our eco-friendly hydrogel is a superabsorbent polymer that can
                  absorb and retain large amounts of water relative to its own
                  mass. When mixed with soil, it creates water reservoirs
                  directly accessible to plant roots.
                </p>
              </div>

              <div className="bg-gradient-to-r from-soco-blue-light/10 to-soco-green-light/10 p-6 rounded-lg">
                <h3 className="font-serif font-bold text-xl mb-3 text-soco-blue-dark">
                  How It Works
                </h3>
                <p>
                  Eco Hydrogel absorbs water during irrigation or rainfall,
                  swelling up to 150 times its weight. It then slowly releases
                  this moisture to plant roots as the soil dries, maintaining
                  optimal moisture levels for longer periods.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-soco-earth/20 p-4 rounded-lg text-center">
                  <span className="block font-bold text-3xl text-soco-green-dark mb-2">
                    150x
                  </span>
                  <span className="text-sm">Water absorption capacity</span>
                </div>
                <div className="bg-soco-earth/20 p-4 rounded-lg text-center">
                  <span className="block font-bold text-3xl text-soco-blue-dark mb-2">
                    50%
                  </span>
                  <span className="text-sm">Less water consumption</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/environmental-conservation-plant-sustainability.jpg"
                alt="Hydrogel spheres"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">Eco Hydrogel</p>
                  <p className="text-xs opacity-75">
                    Water retention technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/Seed_raising.webp"
              alt="Healthy soil with plants"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/water_drop.webp"
              alt="Water droplets on plant"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/hydrogelpng.png"
              alt="Growing seedling"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;

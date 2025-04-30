import React from "react";
import { Earth } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-soco-blue-light/20 text-soco-blue-dark text-sm font-medium mb-6">
              <Earth className="w-4 h-4 mr-1" />
              <span>Our Mission</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Revolutionizing Agriculture <br />
              For a Sustainable Future
            </h2>
            <p className="text-gray-700 mb-6">
              At Ecogel, we're committed to developing innovative, eco-friendly
              solutions that address the growing challenges of water scarcity in
              agriculture. Our company was founded on the belief that technology
              and nature can work together to create more sustainable farming
              practices.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of agricultural scientists and polymer engineers has
              developed a breakthrough hydrogel that dramatically improves soil
              water retention while being completely biodegradable and safe for
              the environment.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-soco-earth/20 p-4 rounded-lg text-center">
                <span className="block font-bold text-2xl text-soco-green-dark mb-1">
                  Eco-Friendly
                </span>
                <span className="text-sm text-gray-600">
                  Biodegradable materials
                </span>
              </div>
              <div className="bg-soco-earth/20 p-4 rounded-lg text-center">
                <span className="block font-bold text-2xl text-soco-blue-dark mb-1">
                  Innovative
                </span>
                <span className="text-sm text-gray-600">
                  Advanced polymer science
                </span>
              </div>
              <div className="bg-soco-earth/20 p-4 rounded-lg text-center">
                <span className="block font-bold text-2xl text-soco-green-dark mb-1">
                  Sustainable
                </span>
                <span className="text-sm text-gray-600">
                  Water-saving solutions
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="../../public/Assets/scientist-testing-soil-stockcake.jpg"
                alt="Scientists working with soil samples"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white font-medium text-lg">
                  Our research team developing next-generation soil technologies
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg absolute -bottom-8 -right-8 max-w-xs">
              <p className="text-lg font-serif italic text-gray-700">
                "We believe that water efficiency will be the cornerstone of
                sustainable agriculture in the coming decades."
              </p>
              <p className="mt-4 font-medium">Soco Founding Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

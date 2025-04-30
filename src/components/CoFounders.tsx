import React from "react";
import { Linkedin } from "lucide-react";

const coFounders = [
  {
    name: "Abdelrahman Khalaf",
    role: "Founder & CEO",
    image: "/abdelrahman.jpg",
    bio: "Leading visionary with a strong background in sustainable soil science.",
    linkedin: "https://linkedin.com/in/Chemist-Abdelrahman-Khalaf209",
  },
  {
    name: "Asmaa Abolyazed",
    role: "Marketing Co-Founder",
    image: "/Asmaa.jpg",
    bio: "Creative marketing strategist passionate about sustainable product branding.",
    linkedin: "https://www.linkedin.com/in/asmaa-abolyzeed9",
  },
  {
    name: "Youssef Reda",
    role: "CPO",
    image: "/Youssef.jpg",
    bio: "Product development expert focused on innovation in eco-friendly agriculture.",
    linkedin:
      "https://www.linkedin.com/in/youssef-el-kholy-7755921ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const CoFounders = () => {
  return (
    <section
      id="cofounders"
      className="py-20 bg-gradient-to-br from-white to-blue-50"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-soco-blue-dark">
          Meet Our Team
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          The passionate team behind Eco Gel, blending science, innovation, and
          sustainability.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {coFounders.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:shadow-2xl transition duration-300"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-soco-green-light"
              />
              <h3 className="text-xl font-semibold text-soco-green-dark mb-1">
                {person.name}
              </h3>
              <p className="text-sm text-soco-blue-dark font-medium mb-2">
                {person.role}
              </p>
              <p className="text-gray-600 text-sm mb-4">{person.bio}</p>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-soco-blue-dark text-soco-blue-dark rounded-full hover:bg-soco-blue-dark hover:text-white transition"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoFounders;

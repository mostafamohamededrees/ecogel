
import React from 'react';
import { Droplet, Sprout, Leaf, Droplets, TreeDeciduous, Sun } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: <Droplet className="h-10 w-10 text-soco-blue-dark" />,
      title: "Enhanced Water Retention",
      description: "Retains up to 300 times its weight in water, reducing irrigation frequency and water usage by up to 50%."
    },
    {
      icon: <Sprout className="h-10 w-10 text-soco-green-dark" />,
      title: "Improved Germination",
      description: "Creates an ideal moisture environment for seeds, increasing germination rates and ensuring stronger seedling development."
    },
    {
      icon: <Leaf className="h-10 w-10 text-soco-green-light" />,
      title: "Reduced Plant Stress",
      description: "Maintains consistent moisture levels, reducing drought stress and helping plants thrive during dry periods."
    },
    {
      icon: <Droplets className="h-10 w-10 text-soco-blue-light" />,
      title: "Nutrient Efficiency",
      description: "Reduces nutrient leaching by binding water-soluble nutrients, making them available to plants for longer periods."
    },
    {
      icon: <TreeDeciduous className="h-10 w-10 text-soco-green-dark" />,
      title: "Eco-Friendly Formula",
      description: "Made from biodegradable materials that break down naturally in the soil without harmful residues."
    },
    {
      icon: <Sun className="h-10 w-10 text-amber-500" />,
      title: "Climate Resilience",
      description: "Helps plants withstand unpredictable weather patterns and longer dry periods, enhancing climate resilience."
    }
  ];

  return (
    <section id="features" className="section relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076" 
          alt="Background" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Benefits of Soco Hydrogel</h2>
          <p className="text-gray-600 text-lg">
            Discover how our innovative soil technology improves plant health while conserving precious water resources.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mb-5">{feature.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

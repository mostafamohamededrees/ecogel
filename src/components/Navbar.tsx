import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Eco_gel Logo"
            className="h-10 w-auto mr-2"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("product")}
            className="font-medium hover:text-soco-green-dark transition-colors"
          >
            Product
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="font-medium hover:text-soco-green-dark transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="font-medium hover:text-soco-green-dark transition-colors"
          >
            About
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-soco-green-dark hover:bg-soco-green-light text-white"
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("product")}
              className="py-2 px-4 hover:bg-gray-100 rounded text-left"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="py-2 px-4 hover:bg-gray-100 rounded text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="py-2 px-4 hover:bg-gray-100 rounded text-left"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-soco-green-dark hover:bg-soco-green-light text-white w-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

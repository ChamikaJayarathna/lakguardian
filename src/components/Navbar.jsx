import { useState } from "react";
import { Menu, Shield, X } from "lucide-react";
import Logo from "@/assets/logo_lak.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <img src={Logo} alt="Lakguardian" className="h-12 w-auto" />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a
                key={link?.name}
                href={link?.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link?.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-6 py-2.5 border border-primary text-primary text-sm font-semibold tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Get a Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks?.map((link) => (
                <a
                  key={link?.name}
                  href={link?.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link?.name}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-primary text-primary text-sm font-semibold tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

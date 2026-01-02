import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Styled like business card */}
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary shadow-lg">
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold text-primary-foreground leading-none">🏠</span>
                <span className="text-lg font-black text-primary-foreground leading-none">LM</span>
              </div>
            </div>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-black">
                <span className="text-primary">Lime</span>{" "}
                <span className="text-accent">Spark</span>
              </h1>
              <p className="text-xs text-muted-foreground font-medium">
                By S.S. Cottage Industries
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#products"
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Products
            </a>
            <a
              href="#about"
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </a>
            <a
              href="#contact"
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </a>
            <a href="tel:+918341767646">
              <Button variant="hero" size="default" className="gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              <a
                href="#products"
                className="font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#about"
                className="font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a href="tel:+918341767646">
                <Button variant="hero" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

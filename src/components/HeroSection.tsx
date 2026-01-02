import { Sparkles, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-20 h-60 w-60 rounded-full bg-highlight/20 blur-3xl animate-float animation-delay-200" />
        <div className="absolute bottom-20 right-1/4 h-40 w-40 rounded-full bg-secondary blur-2xl animate-float animation-delay-400" />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              Premium Cleaning Solutions
            </div>

            <h1 className="font-display text-4xl font-black leading-tight md:text-5xl lg:text-6xl xl:text-7xl mb-6 opacity-0 animate-slide-up">
              Experience the{" "}
              <span className="text-gradient-primary">Spark</span> of{" "}
              <span className="relative inline-block">
                Purity
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 4 100 2 198 6"
                    stroke="hsl(var(--primary))"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-slide-up animation-delay-100">
              Transform your home with our premium range of eco-friendly cleaning
              products. Powerful formulas, fresh fragrances, and trusted quality
              since day one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-slide-up animation-delay-200">
              <a href="#products">
                <Button variant="hero" size="xl">
                  Explore Products
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="xl">
                  Contact Us
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-0 animate-fade-in animation-delay-300">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-2xl">✨</span>
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-2xl">🌿</span>
                <span className="text-sm font-medium">Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-2xl">🇮🇳</span>
                <span className="text-sm font-medium">Made in India</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex items-center justify-center opacity-0 animate-scale-in animation-delay-200">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl scale-90" />
              
              <img
                src={heroImage}
                alt="Fresh lime splash representing pure cleaning power"
                className="relative z-10 w-full max-w-lg mx-auto animate-float"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-500">
          <a
            href="#products"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

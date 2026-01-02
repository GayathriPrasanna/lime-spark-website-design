import { Shield, Leaf, Award, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Quality",
    description: "Every product is crafted with premium ingredients for superior cleaning performance.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Our formulas are designed to be gentle on the environment while tough on dirt.",
  },
  {
    icon: Award,
    title: "Industry Certified",
    description: "All products meet stringent quality standards for your peace of mind.",
  },
  {
    icon: Heart,
    title: "Family Safe",
    description: "Created with your family's health in mind. Safe for everyday use.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Crafting <span className="text-gradient-primary">Excellence</span>{" "}
              Since Day One
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              S.S. Cottage Industries brings you Lime Spark – a brand built on the
              foundation of quality, trust, and innovation. Based in the historic
              town of Amaravathi, we're committed to delivering premium cleaning
              solutions that make every home shine with purity.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our products are formulated using the finest ingredients, combining
              traditional wisdom with modern science to create cleaning solutions
              that are effective, safe, and environmentally responsible.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-elevated rounded-2xl p-6 opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import ProductCard from "./ProductCard";

const products = [
  {
    title: "Dish Wash Liquid",
    description:
      "Powerful anti-bacterial formula that cuts through grease effortlessly. Available in 1.2 Liters pack for long-lasting freshness.",
    icon: "🍽️",
  },
  {
    title: "Detergent Liquid",
    description:
      "High-performance cleaning for all fabrics. Gentle on clothes, tough on stains. Perfect for both machine and hand wash.",
    icon: "👕",
  },
  {
    title: "Phenyle",
    description:
      "Perfumed herbal floor cleaner that leaves your home smelling fresh and hygienic. Natural ingredients for a healthy home.",
    icon: "🏠",
  },
  {
    title: "Bathroom Acid",
    description:
      "Strong hygienic home care solution for sparkling clean bathrooms. Removes tough stains and lime deposits effectively.",
    icon: "🚿",
  },
  {
    title: "Lijol",
    description:
      "Premium floor and surface cleaner that provides deep cleaning and long-lasting shine. Safe for all floor types.",
    icon: "✨",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Premium Cleaning <span className="text-gradient-primary">Range</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our carefully crafted range of cleaning solutions designed
            to make your home sparkle with freshness and purity.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              {...product}
              delay={`${index * 100}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

import ProductCard from "./ProductCard";
import productDishwash from "@/assets/product-dishwash.png";
import productDetergent from "@/assets/product-detergent.png";
import productPhenyle from "@/assets/product-phenyle.png";
import productBathroomAcid from "@/assets/product-bathroom-acid.png";

const products = [
  {
    title: "Dish Wash Liquid (1.2 Liters)",
    description:
      "Powerful anti-bacterial formula that cuts through grease effortlessly. Available in 1.2 Liters pack for long-lasting freshness.",
    image: productDishwash,
  },
  {
    title: "Premium Detergent Liquid",
    description:
      "High-performance cleaning for all fabrics. Gentle on clothes, tough on stains. Perfect for both machine and hand wash.",
    image: productDetergent,
  },
  {
    title: "Perfumed Herbal Phenyle",
    description:
      "Perfumed herbal floor cleaner that leaves your home smelling fresh and hygienic. Natural ingredients for a healthy home.",
    image: productPhenyle,
  },
  {
    title: "Hygienic Bathroom Acid",
    description:
      "Strong hygienic home care solution for sparkling clean bathrooms. Removes tough stains and lime deposits effectively.",
    image: productBathroomAcid,
  },
  {
    title: "Lijol Surface Cleaner",
    description:
      "Premium floor and surface cleaner that provides deep cleaning and long-lasting shine. Safe for all floor types.",
    image: undefined,
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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

import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  image?: string;
  delay?: string;
}

const ProductCard = ({ title, description, image, delay = "0" }: ProductCardProps) => {
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in getting a quote for ${title} from Lime Spark.`
  );

  return (
    <div
      className={`group rounded-2xl bg-card border border-border shadow-lg overflow-hidden opacity-0 animate-slide-up hover:shadow-xl transition-all duration-300`}
      style={{ animationDelay: delay }}
    >
      {/* Product Image */}
      <div className="relative bg-gradient-to-br from-white to-muted/30 p-6 flex items-center justify-center h-64 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary text-5xl">
            ✨
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 bg-card">
        <h3 className="mb-2 font-display text-xl font-bold text-foreground">
          {title}
        </h3>
        <p className="mb-6 text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/919182397646?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button variant="whatsapp" className="w-full gap-2">
            <MessageCircle className="h-5 w-5" />
            Get Quote on WhatsApp
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;

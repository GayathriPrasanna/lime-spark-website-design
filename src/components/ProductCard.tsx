import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: string;
}

const ProductCard = ({ title, description, icon, delay = "0" }: ProductCardProps) => {
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in getting a quote for ${title} from Lime Spark.`
  );

  return (
    <div
      className={`card-elevated group rounded-2xl p-6 opacity-0 animate-slide-up`}
      style={{ animationDelay: delay }}
    >
      {/* Icon/Emoji */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-secondary text-4xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Content */}
      <h3 className="mb-2 font-display text-xl font-bold text-foreground">
        {title}
      </h3>
      <p className="mb-6 text-muted-foreground leading-relaxed">
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
  );
};

export default ProductCard;

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919182397646?text=Hi!%20I'm%20interested%20in%20Lime%20Spark%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Button variant="floating" size="icon-lg" className="relative">
          <MessageCircle className="h-7 w-7" />
          <span className="absolute -left-28 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-sm text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Chat on WhatsApp
          </span>
        </Button>
      </a>

      {/* Call Button */}
      <a href="tel:+918341767646" className="group">
        <Button variant="call" size="icon-lg" className="float-button relative">
          <Phone className="h-7 w-7" />
          <span className="absolute -left-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-sm text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Call Now
          </span>
        </Button>
      </a>
    </div>
  );
};

export default FloatingButtons;

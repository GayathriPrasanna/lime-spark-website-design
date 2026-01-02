import { Linkedin, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-xl">🍋</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-primary-foreground">
                  Lime Spark
                </h3>
                <p className="text-xs text-muted-foreground">
                  By S.S. Cottage Industries
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium cleaning solutions crafted with care. Experience the spark
              of purity in every drop.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#products"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                <strong className="text-primary-foreground">Owner:</strong> Shaik Mabu Subhani
              </p>
              <a
                href="tel:+918341767646"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                +91 8341767646
              </a>
              <a
                href="https://wa.me/919182397646"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                +91 91823 97646
              </a>
              <a
                href="https://www.linkedin.com/in/shaik-mabusubhani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} S.S. Cottage Industries. All rights
              reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Dharanikota, Amaravathi - 522 020, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

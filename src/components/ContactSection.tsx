import { Phone, MapPin, MessageCircle, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to experience the spark of purity? Get in touch with us for bulk
            orders, inquiries, or to become a distributor.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {/* Phone */}
          <a href="tel:+918341767646" className="block">
            <div className="card-elevated rounded-2xl p-6 text-center h-full">
              <div className="mb-4 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm">+91 8341767646</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919182397646?text=Hi!%20I'm%20interested%20in%20Lime%20Spark%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="card-elevated rounded-2xl p-6 text-center h-full">
              <div className="mb-4 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/10">
                <MessageCircle className="h-6 w-6 text-[#25D366]" />
              </div>
              <h3 className="font-display font-bold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground text-sm">+91 91823 97646</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shaik-mabusubhani"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="card-elevated rounded-2xl p-6 text-center h-full">
              <div className="mb-4 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0A66C2]/10">
                <Linkedin className="h-6 w-6 text-[#0A66C2]" />
              </div>
              <h3 className="font-display font-bold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground text-sm">Shaik Mabu Subhani</p>
            </div>
          </a>

          {/* Location */}
          <div className="card-elevated rounded-2xl p-6 text-center h-full">
            <div className="mb-4 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-display font-bold mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">
              Dharanikota, Amaravathi - 522 020
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a href="tel:+918341767646">
              <Button variant="hero" size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                Call Now: 8341767646
              </Button>
            </a>
            <a
              href="https://wa.me/919182397646?text=Hi!%20I'm%20interested%20in%20Lime%20Spark%20products."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Package, Home, Building2, Car, Warehouse, Shield, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { ref, isRevealed } = useScrollReveal();
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t("homeRelocation"),
      description: t("homeRelocationDesc"),
    },
    {
      icon: Building2,
      title: t("officeShifting"),
      description: t("officeShiftingDesc"),
    },
    {
      icon: Package,
      title: t("packingUnpacking"),
      description: t("packingUnpackingDesc"),
    },
    {
      icon: Car,
      title: t("vehicleTransport"),
      description: t("vehicleTransportDesc"),
    },
    {
      icon: Warehouse,
      title: t("storageSolutions"),
      description: t("storageSolutionsDesc"),
    },
    {
      icon: Shield,
      title: t("insuranceCoverage"),
      description: t("insuranceCoverageDesc"),
    },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/918209505353?text=Hi there", "_blank");
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-12 md:mb-16 scroll-reveal ${isRevealed ? 'revealed' : ''}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t("ourServices")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("whatWeOffer").split(" ")[0]} <span className="text-gradient">{t("whatWeOffer").split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("servicesSubtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-6 md:p-8 rounded-2xl glass-card hover-lift border border-border/50 scroll-reveal-scale ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <service.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              
              {/* Hover accent line */}
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="whatsapp" 
            size="lg" 
            onClick={handleWhatsApp}
            className="hover-glow"
          >
            <MessageCircle className="w-5 h-5" />
            {t("getFreeQuote")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

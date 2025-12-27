import { useState } from "react";
import { Phone, Package, Truck, Home } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";
import PhoneSelector from "./PhoneSelector";

const HowItWorks = () => {
  const { ref, isRevealed } = useScrollReveal();
  const [showPhoneSelector, setShowPhoneSelector] = useState(false);
  const { t } = useLanguage();

  const steps = [
    {
      icon: Phone,
      title: t("bookACall"),
      description: t("bookACallDesc"),
      step: "01",
      isClickable: true,
    },
    {
      icon: Package,
      title: t("wePack"),
      description: t("wePackDesc"),
      step: "02",
      isClickable: false,
    },
    {
      icon: Truck,
      title: t("weMove"),
      description: t("weMoveDesc"),
      step: "03",
      isClickable: false,
    },
    {
      icon: Home,
      title: t("settleIn"),
      description: t("settleInDesc"),
      step: "04",
      isClickable: false,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 scroll-reveal ${isRevealed ? 'revealed' : ''}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            {t("simpleProcess")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            {t("howItWorksTitle").split(" ").slice(0, -1).join(" ")} <span className="text-primary">{t("howItWorksTitle").split(" ").slice(-1)}</span>
          </h2>
          <p className="text-secondary-foreground/70 max-w-xl mx-auto">
            {t("howItWorksSubtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`relative group scroll-reveal-scale ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5">
                  <div className="w-full h-full bg-gradient-to-r from-primary/50 to-transparent" />
                  {/* Animated dot */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>
              )}
              
              <div 
                onClick={item.isClickable ? () => setShowPhoneSelector(true) : undefined}
                className={`bg-card rounded-3xl p-8 shadow-elevated hover:shadow-glow transition-all duration-500 hover:-translate-y-3 relative overflow-hidden group ${item.isClickable ? 'cursor-pointer ring-2 ring-primary/20 hover:ring-primary/50' : ''}`}
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 animate-shimmer" />
                </div>
                
                {/* Step number */}
                <span className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                  {item.step}
                </span>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10 ${item.isClickable ? 'animate-pulse-glow' : ''}`}>
                  <item.icon className="w-8 h-8 text-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 relative z-10 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  {item.description}
                </p>
                
                {/* Call to action for clickable card */}
                {item.isClickable && (
                  <div className="mt-4 flex items-center gap-2 text-primary font-medium text-sm relative z-10">
                    <Phone className="w-4 h-4" />
                    <span>{t("clickToCall")}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Phone Selector Modal */}
      <PhoneSelector isOpen={showPhoneSelector} onClose={() => setShowPhoneSelector(false)} />
    </section>
  );
};

export default HowItWorks;

import { useState } from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import TruckAnimation from "./TruckAnimation";
import AnimatedCounter from "./AnimatedCounter";
import PhoneSelector from "./PhoneSelector";
import { useLanguage } from "@/hooks/useLanguage";
import nashikHills from "@/assets/nashik-hills-hero.jpg";

const Hero = () => {
  const [showPhoneSelector, setShowPhoneSelector] = useState(false);
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open("https://wa.me/918209505353?text=Hi there", "_blank");
  };

  return (
    <section id="home" className="min-h-screen pt-20 md:pt-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={nashikHills}
          alt=""
          role="presentation"
          className="absolute inset-0 h-full w-full object-cover"
          decoding="async"
          fetchPriority="high"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
      </div>
      
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{t("servingLocation")}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up opacity-0 leading-tight" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            {t("heroTitle1")}{" "}
            <span className="text-primary relative">
              {t("heroTitle2")}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 2 150 2 298 10" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
            <br />
            {t("heroTitle3")}
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            {t("heroSubtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button variant="whatsapp" size="xl" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              {t("whatsappUs")}
            </Button>
            <Button variant="call" size="xl" onClick={() => setShowPhoneSelector(true)}>
              <Phone className="w-5 h-5" />
              {t("callNow")}
            </Button>
          </div>

          {/* Truck Animation */}
          <div className="animate-fade-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <TruckAnimation />
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-up opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <AnimatedCounter end={5} suffix="+" label={t("yearsExperience")} />
            <AnimatedCounter end={1000} suffix="+" label={t("happyCustomers")} />
            <AnimatedCounter end={50} suffix="+" label={t("citiesCovered")} />
            <div className="text-center p-4 rounded-xl bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-elevated transition-shadow">
              <div className="text-2xl md:text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">{t("customerSupport")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Phone Selector Modal */}
      <PhoneSelector isOpen={showPhoneSelector} onClose={() => setShowPhoneSelector(false)} />
    </section>
  );
};

export default Hero;

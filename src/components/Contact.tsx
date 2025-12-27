import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "./ui/button";
import PhoneSelector from "./PhoneSelector";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const [showPhoneSelector, setShowPhoneSelector] = useState(false);
  const { ref, isRevealed } = useScrollReveal();
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open("https://wa.me/918209505353?text=Hi there", "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 gradient-warm relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div 
            ref={ref}
            className={`text-center mb-12 scroll-reveal ${isRevealed ? 'revealed' : ''}`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("contactUs")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t("getInTouch")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t("contactSubtitle")}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* WhatsApp Card */}
            <div 
              onClick={handleWhatsApp}
              role="button"
              tabIndex={0}
              aria-label="Open WhatsApp chat"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleWhatsApp();
              }}
              className={`group p-8 rounded-3xl bg-primary text-primary-foreground cursor-pointer hover:scale-105 transition-all duration-300 shadow-elevated hover:shadow-glow scroll-reveal-left ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{t("whatsapp")}</h3>
                  <p className="text-white/80">{t("chatInstantly")}</p>
                </div>
              </div>
              <p className="text-xl font-semibold mb-4">+91 82095 05353</p>
              <Button variant="outline" className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                {t("sendMessage")}
              </Button>
            </div>

            {/* Phone Card */}
            <div 
              onClick={() => setShowPhoneSelector(true)}
              role="button"
              tabIndex={0}
              aria-label="Open phone number selector"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setShowPhoneSelector(true);
              }}
              className={`group p-8 rounded-3xl bg-secondary text-secondary-foreground cursor-pointer hover:scale-105 transition-all duration-300 shadow-elevated scroll-reveal-right ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{t("callUs")}</h3>
                  <p className="text-secondary-foreground/80">{t("speakToTeam")}</p>
                </div>
              </div>
              <div className="space-y-1 mb-4">
                <p className="text-xl font-semibold">+91 73853 14953</p>
                <p className="text-lg text-secondary-foreground/70">+91 82095 05353</p>
              </div>
              <Button variant="default" className="w-full">
                {t("chooseAndCall")}
              </Button>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: MapPin, title: t("officeAddress"), text: "Sawroop Park, Ro-House 17, Panchvati, Nashik-422003" },
              { icon: Clock, title: t("workingHours"), text: t("available247") },
              { icon: Mail, title: t("email"), text: "Satgurupackersandmovers993@gmail.com" },
            ].map((item, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl glass-card hover-lift text-center scroll-reveal-scale ${isRevealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone Selector Modal */}
      <PhoneSelector isOpen={showPhoneSelector} onClose={() => setShowPhoneSelector(false)} />
    </section>
  );
};

export default Contact;

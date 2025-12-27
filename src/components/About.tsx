import { CheckCircle2, Award, Users, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { ref, isRevealed } = useScrollReveal();
  const { t } = useLanguage();

  const highlights = [
    { icon: Award, label: t("licensedInsured") },
    { icon: Users, label: t("trainedProfessionals") },
    { icon: Clock, label: t("onTimeDelivery") },
  ];

  const checklist = [
    t("localPanIndia"),
    t("modernFleet"),
    t("qualityPacking"),
    t("transparentPricing"),
  ];

  return (
    <section id="about" className="py-16 md:py-24 gradient-warm relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image/Visual */}
          <div className={`relative scroll-reveal-left ${isRevealed ? 'revealed' : ''}`}>
            <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl gradient-hero p-1 hover-glow transition-all duration-500">
              <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full gradient-accent flex items-center justify-center animate-float shadow-glow">
                    <span className="text-5xl">🚛</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Since 2020</h3>
                  <p className="text-muted-foreground">{t("servingFamilies")}</p>
                </div>
              </div>
            </div>
            
            {/* Floating badges with enhanced animation */}
            <div className="absolute -top-4 -right-4 md:top-8 md:-right-8 glass-card shadow-elevated rounded-2xl p-4 animate-bounce-soft hover:scale-110 transition-transform cursor-default">
              <div className="text-2xl font-bold text-gradient">5+</div>
              <div className="text-xs text-muted-foreground">{t("yearsExperience").split(" ")[0]}</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 glass-card shadow-elevated rounded-2xl p-4 animate-bounce-soft hover:scale-110 transition-transform cursor-default" style={{ animationDelay: '0.5s' }}>
              <div className="text-2xl font-bold text-gradient">1K+</div>
              <div className="text-xs text-muted-foreground">{t("happyCustomers").split(" ")[0]}</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`scroll-reveal-right ${isRevealed ? 'revealed' : ''}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("aboutTitle")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("nashikTrusted")}
              <span className="text-gradient"> {t("movingCompany")}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {t("aboutDesc1")}
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t("aboutDesc2")}
            </p>

            {/* Highlights with hover effects */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 rounded-xl glass-card hover-lift cursor-default group"
                >
                  <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Checklist with staggered animation */}
            <ul className="space-y-3">
              {checklist.map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-start gap-3 scroll-reveal ${isRevealed ? 'revealed' : ''}`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

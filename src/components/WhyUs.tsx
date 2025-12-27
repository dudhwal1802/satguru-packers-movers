import { Shield, Clock, BadgeIndianRupee, ThumbsUp, Headphones, Truck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";

const WhyUs = () => {
  const { ref, isRevealed } = useScrollReveal();
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Shield,
      title: t("safeSecure"),
      description: t("safeSecureDesc"),
    },
    {
      icon: Clock,
      title: t("timelyDelivery"),
      description: t("timelyDeliveryDesc"),
    },
    {
      icon: BadgeIndianRupee,
      title: t("affordableRates"),
      description: t("affordableRatesDesc"),
    },
    {
      icon: ThumbsUp,
      title: t("experiencedTeam"),
      description: t("experiencedTeamDesc"),
    },
    {
      icon: Headphones,
      title: t("support247"),
      description: t("support247Desc"),
    },
    {
      icon: Truck,
      title: t("modernFleetTitle"),
      description: t("modernFleetDesc"),
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-12 md:mb-16 scroll-reveal ${isRevealed ? 'revealed' : ''}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            {t("whyChooseUs")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("satguruAdvantage").split(" ")[0]} <span className="text-primary">{t("satguruAdvantage").split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            {t("whyUsSubtitle")}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group p-6 rounded-2xl bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 hover:bg-secondary-foreground/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 scroll-reveal-scale ${isRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{reason.title}</h3>
              <p className="text-secondary-foreground/70 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

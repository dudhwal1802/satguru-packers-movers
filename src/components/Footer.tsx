import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import LogoMark from "./LogoMark";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
                <LogoMark className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <span className="text-lg font-bold">Satguru</span>
                <span className="block text-xs text-primary">Packers & Movers</span>
              </div>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              {t("footerDesc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              {[
                { key: "home", label: t("home") },
                { key: "services", label: t("services") },
                { key: "about-us", label: t("aboutUs") },
                { key: "why-us", label: t("whyUs") },
                { key: "contact", label: t("contact") },
              ].map((link) => (
                <li key={link.key}>
                  <a 
                    href={`#${link.key}`}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("ourServicesFooter")}</h4>
            <ul className="space-y-2">
              {[
                t("homeRelocation"),
                t("officeShifting"),
                t("vehicleTransport"),
                t("packingUnpacking"),
                t("storageSolutions"),
              ].map((service) => (
                <li key={service}>
                  <span className="text-secondary-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t("contactInfo")}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">
                  Sawroop Park, Ro-House 17, Panchvati, Nashik-422003
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+917385314953" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                    +91 73853 14953
                  </a>
                  <a href="tel:+918209505353" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                    +91 82095 05353
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:Satgurupackersandmovers993@gmail.com" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  Satgurupackersandmovers993@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 pb-[calc(6rem+env(safe-area-inset-bottom))] md:pb-0 border-t border-secondary-foreground/10 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © {currentYear} Satguru Packers and Movers. {t("allRightsReserved")}
          </p>
          <p className="mt-2 text-secondary-foreground/60 text-sm">
            Developed with coffee &amp; AI by{" "}
            <a
              href="https://chandrabhan.me"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-primary transition-colors"
            >
              Chandrabhan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

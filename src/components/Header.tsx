import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import PhoneSelector from "./PhoneSelector";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";
import LogoMark from "./LogoMark";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPhoneSelector, setShowPhoneSelector] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t("home"), href: "#home" },
    { name: t("services"), href: "#services" },
    { name: t("howItWorks"), href: "#how-it-works" },
    { name: t("aboutUs"), href: "#about" },
    { name: t("whyUs"), href: "#why-us" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-accent flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <LogoMark className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-lg font-bold text-foreground leading-tight">Satguru</span>
                <span className="text-xs md:text-sm text-primary font-medium leading-tight">Packers & Movers</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-3">
              <LanguageSwitcher />
              <Button 
                variant="call" 
                size="default" 
                onClick={() => setShowPhoneSelector(true)}
              >
                <Phone className="w-4 h-4" />
                {t("callNow")}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitcher />
              <button
                className="p-2 text-foreground hover:text-primary transition-colors"
                type="button"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div id="mobile-menu" className="lg:hidden py-4 border-t border-border animate-fade-up">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button variant="call" size="default" onClick={() => {
                  setIsMenuOpen(false);
                  setShowPhoneSelector(true);
                }}>
                  <Phone className="w-4 h-4" />
                  {t("callNow")}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Phone Selector Modal */}
      <PhoneSelector isOpen={showPhoneSelector} onClose={() => setShowPhoneSelector(false)} />
    </>
  );
};

export default Header;

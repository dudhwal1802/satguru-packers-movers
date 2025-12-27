import { Phone, X } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/hooks/useLanguage";

interface PhoneSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhoneSelector = ({ isOpen, onClose }: PhoneSelectorProps) => {
  const { t } = useLanguage();
  
  const phoneNumbers = [
    { number: "7385314953", display: "+91 73853 14953" },
    { number: "8209505353", display: "+91 82095 05353" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-3xl p-6 shadow-elevated max-w-sm w-full animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-foreground" />
          </div>
          <h3 className="text-xl font-bold text-foreground">{t("chooseNumber")}</h3>
          <p className="text-muted-foreground text-sm mt-1">{t("selectNumber")}</p>
        </div>
        
        <div className="space-y-3">
          {phoneNumbers.map((phone) => (
            <a
              key={phone.number}
              href={`tel:+91${phone.number}`}
              className="flex items-center justify-between p-4 rounded-2xl bg-secondary/10 hover:bg-primary/10 border border-border hover:border-primary transition-all group"
            >
              <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {phone.display}
              </span>
              <Button variant="call" size="sm">
                {t("call")}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneSelector;

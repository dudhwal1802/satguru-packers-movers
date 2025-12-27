import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import PhoneSelector from "./PhoneSelector";

const MobileCTA = () => {
  const [showPhoneSelector, setShowPhoneSelector] = useState(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/918209505353?text=Hi there", "_blank");
  };

  return (
    <>
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Gradient fade effect above the bar */}
      <div className="h-4 bg-gradient-to-t from-background to-transparent" />
      
      <div className="bg-card/95 backdrop-blur-lg border-t border-border shadow-elevated px-4 py-3 safe-area-bottom">
        <div className="flex gap-3">
          {/* Call Button */}
          <button
            onClick={() => setShowPhoneSelector(true)}
            type="button"
            aria-label="Call now"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold transition-all active:scale-95"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            type="button"
            aria-label="Chat on WhatsApp"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-all active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
    <PhoneSelector isOpen={showPhoneSelector} onClose={() => setShowPhoneSelector(false)} />
    </>
  );
};

export default MobileCTA;

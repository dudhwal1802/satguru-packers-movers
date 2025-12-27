import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/918209505353?text=Hi there", "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      type="button"
      className="hidden md:flex fixed bottom-[calc(6rem+env(safe-area-inset-bottom))] md:bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-elevated hover:scale-110 transition-all duration-300 items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      
      {/* Pulse animation ring */}
      <span className="absolute w-full h-full rounded-full bg-primary animate-ping opacity-30" />
    </button>
  );
};

export default FloatingWhatsApp;

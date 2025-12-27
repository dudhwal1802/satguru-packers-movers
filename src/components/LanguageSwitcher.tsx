import { useLanguage } from "@/hooks/useLanguage";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "hi" : "en")}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium text-sm transition-all"
      title={language === "en" ? "हिंदी में बदलें" : "Switch to English"}
    >
      <Languages className="w-4 h-4" />
      <span>{language === "en" ? "हिंदी" : "English"}</span>
    </button>
  );
};

export default LanguageSwitcher;

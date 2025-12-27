import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Remove loader after fade completes
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div className="text-center mb-8 animate-fade-up">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Satguru
        </h1>
        <p className="text-primary font-medium">Packers & Movers</p>
      </div>

      {/* Truck Animation */}
      <div className="relative w-64 h-24 overflow-hidden">
        {/* Road */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-secondary rounded-t-lg overflow-hidden">
          <div
            className="absolute top-1/2 -translate-y-1/2 w-full h-1 animate-road-move"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, hsl(45 100% 60%) 0px, hsl(45 100% 60%) 20px, transparent 20px, transparent 40px)",
            }}
          />
        </div>

        {/* Truck */}
        <div className="absolute bottom-6 animate-loading-truck">
          <svg
            width="80"
            height="40"
            viewBox="0 0 180 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "scaleX(-1)" }}
          >
            {/* Truck Body */}
            <rect x="50" y="10" width="120" height="45" rx="4" fill="hsl(24 95% 53%)" />
            <rect x="55" y="15" width="110" height="35" rx="2" fill="hsl(24 95% 60%)" />

            {/* Truck Cabin */}
            <path d="M10 25 L50 25 L50 55 L10 55 L10 40 Q10 25 25 25 Z" fill="hsl(220 60% 20%)" />
            <rect x="15" y="30" width="25" height="15" rx="2" fill="hsl(200 80% 70%)" opacity="0.7" />
            <rect x="42" y="28" width="6" height="24" fill="hsl(220 50% 30%)" />

            {/* Wheels */}
            <circle cx="35" cy="60" r="10" fill="hsl(220 10% 20%)" />
            <circle cx="35" cy="60" r="6" fill="hsl(220 10% 35%)" />
            <circle cx="130" cy="60" r="10" fill="hsl(220 10% 20%)" />
            <circle cx="130" cy="60" r="6" fill="hsl(220 10% 35%)" />
          </svg>
        </div>

        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-t from-green-600 to-green-500" />
      </div>

      {/* Loading Text */}
      <p className="mt-8 text-muted-foreground animate-pulse">Loading...</p>
    </div>
  );
};

export default LoadingScreen;

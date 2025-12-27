const TruckAnimation = () => {
  return (
    <div className="relative w-full h-32 md:h-40 overflow-hidden">
      {/* Highway/Road */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-highway rounded-t-lg overflow-hidden">
        {/* Road markings */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-full h-1 animate-road-move"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, hsl(45 100% 60%) 0px, hsl(45 100% 60%) 40px, transparent 40px, transparent 80px)',
          }}
        />
      </div>

      {/* Truck SVG - Continuously moving left to right */}
      <div 
        className="absolute bottom-12 md:bottom-16 animate-truck-move"
        style={{ transform: 'scaleX(-1)' }}
      >
        <svg 
          width="180" 
          height="80" 
          viewBox="0 0 180 80" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-[220px] md:h-[100px]"
        >
          {/* Truck Body (Container) */}
          <rect x="50" y="10" width="120" height="45" rx="4" fill="hsl(24 95% 53%)" />
          <rect x="55" y="15" width="110" height="35" rx="2" fill="hsl(24 95% 60%)" />
          
          {/* Company Name on Truck - flipped back to be readable */}
          <g transform="translate(220, 0) scale(-1, 1)">
            <text x="110" y="32" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="Poppins">
              SATGURU
            </text>
            <text x="110" y="42" textAnchor="middle" fill="white" fontSize="5" fontFamily="Poppins">
              Packers & Movers
            </text>
          </g>

          {/* Truck Cabin */}
          <path d="M10 25 L50 25 L50 55 L10 55 L10 40 Q10 25 25 25 Z" fill="hsl(220 60% 20%)" />
          <rect x="15" y="30" width="25" height="15" rx="2" fill="hsl(200 80% 70%)" opacity="0.7" />
          
          {/* Cabin Details */}
          <rect x="42" y="28" width="6" height="24" fill="hsl(220 50% 30%)" />
          
          {/* Wheels */}
          <circle cx="35" cy="60" r="12" fill="hsl(220 10% 20%)" />
          <circle cx="35" cy="60" r="8" fill="hsl(220 10% 35%)" />
          <circle cx="35" cy="60" r="3" fill="hsl(220 10% 50%)" />
          
          <circle cx="130" cy="60" r="12" fill="hsl(220 10% 20%)" />
          <circle cx="130" cy="60" r="8" fill="hsl(220 10% 35%)" />
          <circle cx="130" cy="60" r="3" fill="hsl(220 10% 50%)" />

          {/* Front Light */}
          <rect x="8" y="45" width="4" height="6" rx="1" fill="hsl(45 100% 60%)" />
          
          {/* Exhaust smoke effect */}
          <circle cx="175" cy="50" r="4" fill="hsl(0 0% 70%)" opacity="0.5" className="animate-pulse" />
          <circle cx="180" cy="48" r="3" fill="hsl(0 0% 70%)" opacity="0.3" className="animate-pulse" />
        </svg>
      </div>

      {/* Ground/Grass */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-green-600 to-green-500" />
    </div>
  );
};

export default TruckAnimation;

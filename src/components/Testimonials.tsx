import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/hooks/useLanguage";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai to Nashik",
    rating: 5,
    text: "Excellent service! The team was very professional and handled all our belongings with utmost care. Highly recommended for anyone looking for reliable movers.",
    avatar: "PS",
  },
  {
    name: "Rajesh Patel",
    location: "Pune to Delhi",
    rating: 5,
    text: "Very smooth experience. They packed everything perfectly and delivered on time. The pricing was transparent with no hidden charges. Will definitely use again!",
    avatar: "RP",
  },
  {
    name: "Anita Desai",
    location: "Nashik to Bangalore",
    rating: 5,
    text: "I was worried about my antique furniture, but Satguru team handled everything with extreme care. Best packers and movers in Nashik!",
    avatar: "AD",
  },
  {
    name: "Vikram Singh",
    location: "Thane to Nashik",
    rating: 5,
    text: "Quick response, professional team, and affordable rates. They made our office relocation stress-free. Thank you Satguru Packers!",
    avatar: "VS",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, isRevealed } = useScrollReveal();
  const { t } = useLanguage();

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 gradient-warm relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={ref}
          className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("testimonials")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t("whatCustomersSay")}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t("testimonialsSubtitle")}
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Main Card */}
              <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  {/* Text */}
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center text-foreground font-bold text-lg">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={goToPrevious}
                  className="w-12 h-12 rounded-full bg-card shadow-soft hover:shadow-elevated flex items-center justify-center text-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentIndex(index);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'w-8 bg-primary' 
                          : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={goToNext}
                  className="w-12 h-12 rounded-full bg-card shadow-soft hover:shadow-elevated flex items-center justify-center text-foreground hover:text-primary transition-all hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

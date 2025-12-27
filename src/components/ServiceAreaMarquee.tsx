import { MapPin } from "lucide-react";

const cities = [
  "Mumbai", "Pune", "Nashik", "Aurangabad", "Nagpur", "Thane", 
  "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata",
  "Ahmedabad", "Surat", "Jaipur", "Lucknow", "Indore",
  "Bhopal", "Vadodara", "Goa", "Chandigarh", "Kochi"
];

const ServiceAreaMarquee = () => {
  return (
    <section className="py-8 bg-secondary overflow-hidden">
      <div className="marquee">
        <div className="marquee-content gap-8">
          {[...cities, ...cities].map((city, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-secondary-foreground/10 whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-secondary-foreground font-medium">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMarquee;

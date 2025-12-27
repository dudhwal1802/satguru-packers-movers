import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const AnimatedCounter = ({ end, suffix = "", label }: AnimatedCounterProps) => {
  const { count, ref } = useCountUp({ end, duration: 2500 });

  return (
    <div 
      ref={ref}
      className="text-center p-4 rounded-xl bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-elevated transition-shadow"
    >
      <div className="text-2xl md:text-3xl font-bold text-primary">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

export default AnimatedCounter;

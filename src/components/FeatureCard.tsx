import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  img: string;
  className?: string;
}

const FeatureCard = ({ className, title, subtitle, img }: FeatureCardProps) => {
  return (
    <div
      className={cn(
        className,
        "bg-card border-outline hover:border-accent mx-5 flex flex-col justify-between rounded-2xl border transition-all duration-300 hover:scale-105 sm:mx-10 md:mx-0",
      )}
    >
      <img src={img} alt={title} className="h-full w-full object-contain" />
      <div className="m-8 space-y-4">
        <h3 className="text-lg font-medium text-[#E4E4E7]">{title}</h3>
        <p className="text-regular max-w-[480px] text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

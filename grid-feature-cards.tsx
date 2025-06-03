import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  const { icon: Icon, title, description } = feature;

  return (
    <div className={cn(
      "group relative h-[280px] p-10 rounded-xl bg-white/5 backdrop-blur-sm",
      "before:absolute before:inset-0 before:rounded-xl before:p-[2px]",
      "before:bg-[linear-gradient(110deg,transparent_45%,transparent_45%)]",
      "hover:before:bg-[linear-gradient(110deg,#4F46E5,#06B6D4,#4F46E5)]",
      "before:transition-all before:duration-300",
      "after:absolute after:inset-[2px] after:rounded-[10px] after:bg-black",
      "overflow-hidden",
      className
    )}>
      <div className="relative z-10 h-full flex flex-col">
        <Icon className="h-10 w-10 mb-6 text-white" />
        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-lg leading-relaxed text-neutral-300">{description}</p>
      </div>
    </div>
  );
}
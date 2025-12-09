import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  className,
}: SectionTitleProps) => {
  return (
    <AnimatedSection className={cn("mb-12", className)}>
      <div className={cn(centered && "text-center")}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div
          className={cn(
            "h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-6",
            centered && "mx-auto"
          )}
        />
      </div>
    </AnimatedSection>
  );
};

export default SectionTitle;

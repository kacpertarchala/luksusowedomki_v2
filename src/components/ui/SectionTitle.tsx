import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionTitle = ({ children, subtitle, className, centered = true }: SectionTitleProps) => {
  return (
    <div className={cn("space-y-4", centered && "text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export { SectionTitle };

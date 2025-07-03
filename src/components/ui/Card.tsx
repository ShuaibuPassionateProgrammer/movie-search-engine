
import React from "react";

export type CardVariant = "elevated" | "outlined" | "flat";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: CardVariant;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { children, className = "", variant = "elevated", ...props },
    ref
  ) => {
    let variantClasses = "";
    switch (variant) {
      case "outlined":
        variantClasses =
          "border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-none";
        break;
      case "flat":
        variantClasses = "bg-transparent shadow-none border-none";
        break;
      case "elevated":
      default:
        variantClasses =
          "bg-white dark:bg-zinc-900 shadow-md border border-transparent";
        break;
    }
    return (
      <div
        ref={ref}
        className={`rounded-xl p-6 transition-colors duration-300 ${variantClasses} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
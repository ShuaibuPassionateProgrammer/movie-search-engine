
import React from "react";
import "./card-animations.css";


export type CardVariant = "elevated" | "outlined" | "flat";

  children: React.ReactNode;
  variant?: CardVariant;
  /** Show loading skeleton state */
  loading?: boolean;
  /** Number of skeleton lines for body */
  skeletonLines?: number;
  /** Optional badge/status (e.g. "New", "Top Rated") */
  badge?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { children, className = "", variant = "elevated", loading = false, skeletonLines = 3, ...props },
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
    // Support for header, footer, and body slots via props or children destructuring
    let header = null, footer = null, body = children;
    // If children is an array, look for special props
    function isElementWithSlot(child: unknown, slotName: string): child is React.ReactElement<{ slot: string }> {
      return (
        React.isValidElement(child) &&
        (child as React.ReactElement<any>).props?.slot === slotName
      );
    }
    function isElementWithAnySlot(child: unknown): child is React.ReactElement<{ slot: string }> {
      return (
        React.isValidElement(child) &&
        ((child as React.ReactElement<any>).props?.slot === "header" ||
          (child as React.ReactElement<any>).props?.slot === "footer")
      );
    }
    if (Array.isArray(children)) {
      header = children.find((child) => isElementWithSlot(child, "header"));
      footer = children.find((child) => isElementWithSlot(child, "footer"));
      body = children.filter((child) => !isElementWithAnySlot(child));
    }
    // Allow for clickable/interactive cards
    const isClickable = !!props.onClick || props.role === "button";
    return (
      <div
        ref={ref}
        className={`relative group/card rounded-xl p-6 transition-colors duration-300 animate-fade-in overflow-hidden ${
          isClickable
            ? "cursor-pointer hover:shadow-2xl hover:-translate-y-0.5 active:scale-[0.98] focus:shadow-2xl focus:outline-none transition-transform" 
            : ""
        } ${variantClasses} ${className}`}
        tabIndex={props.tabIndex ?? (isClickable ? 0 : undefined)}
        aria-label={props["aria-label"] || "Card"}
        role={props.role || (isClickable ? "button" : undefined)}
        {...props}
      >
        {/* Badge/status */}
        {props.badge && !loading && (
          <span className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-md dark:bg-blue-500 animate-fade-in">
            {props.badge}
          </span>
        )}
        {/* Header slot */}
        {header && !loading && (
          <div className="mb-4 font-semibold text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2 animate-fade-in select-none">
            {header}
          </div>
        )}
        {/* Skeleton header */}
        {header && loading && (
          <div className="mb-4 h-6 w-1/3 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
        )}
        {/* Body */}
        <div className="flex-1 animate-fade-in-slow min-h-[1.5rem]">
          {loading ? (
            <div className="space-y-2">
              {Array.from({ length: skeletonLines }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-full bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse"
                  style={{ width: `${80 - i * 10}%` }}
                />
              ))}
            </div>
          ) : typeof body === "string" ? (
            <span className="whitespace-pre-line break-words text-zinc-700 dark:text-zinc-200 text-base select-text">{body}</span>
          ) : (
            body
          )}
        </div>
        {/* Footer slot */}
        {footer && !loading && (
          <div className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-2 animate-fade-in select-none">
            {footer}
          </div>
        )}
        {footer && loading && (
          <div className="mt-4 h-4 w-1/4 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse" />
        )}
        {/* Subtle gradient overlay for depth */}
        {/* Subtle gradient overlay for depth, only on non-loading */}
        {!loading && (
          <span
            className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-zinc-50/40 to-zinc-200/10 dark:via-zinc-900/30 dark:to-zinc-800/20"
            aria-hidden="true"
          />
        )}
        {/* Focus ring and hover effect for accessibility and microinteraction */}
        <span
          className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-transparent group-focus/card:ring-blue-400 group-hover/card:ring-blue-200 dark:group-focus/card:ring-blue-500 dark:group-hover/card:ring-blue-800 transition-all duration-200 animate-fade-in"
          aria-hidden="true"
        />
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
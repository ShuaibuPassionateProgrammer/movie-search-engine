
import React from "react";

export type ButtonVariant = "solid" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "solid",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none select-none";
    const variants: Record<ButtonVariant, string> = {
      solid:
        "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700",
      outline:
        "border border-blue-600 text-blue-700 bg-transparent hover:bg-blue-50 active:bg-blue-100 dark:border-blue-400 dark:text-blue-200 dark:hover:bg-blue-900/20 dark:active:bg-blue-900/40",
      ghost:
        "bg-transparent text-blue-700 hover:bg-blue-50 active:bg-blue-100 dark:text-blue-200 dark:hover:bg-blue-900/20 dark:active:bg-blue-900/40 border border-transparent",
      danger:
        "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 dark:bg-red-500 dark:hover:bg-red-600 dark:active:bg-red-700",
    };
    const sizes: Record<ButtonSize, string> = {
      sm: "px-3 py-1.5 text-sm h-8 min-w-[2rem]",
      md: "px-4 py-2 text-base h-10 min-w-[2.5rem]",
      lg: "px-6 py-3 text-lg h-12 min-w-[3rem]",
    };
    return (
      <button
        ref={ref}
        type={props.type || "button"}
        className={[
          base,
          variants[variant],
          sizes[size],
          loading ? "relative text-transparent pointer-events-none" : "",
          className,
        ].join(" ")}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg className="animate-spin h-5 w-5 text-blue-500 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          </span>
        )}
        {!loading && leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
        <span className={loading ? "invisible" : ""}>{children}</span>
        {!loading && rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

import * as React from "react";


export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus-visible:ring-blue-400",
  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:focus-visible:ring-gray-500",
  outline:
    "border border-gray-300 text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-400 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-500",
  ghost:
    "bg-transparent text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 dark:focus-visible:ring-blue-600",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-4 py-2 text-base rounded-lg",
  lg: "px-6 py-3 text-lg rounded-xl",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={props.type || "button"}
        className={`inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

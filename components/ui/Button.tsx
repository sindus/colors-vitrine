"use client";

import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "ochre";
type Size = "sm" | "md" | "lg";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-forest text-cream border border-forest hover:bg-forest-deep hover:border-forest-deep",
  secondary:
    "bg-transparent text-forest border border-forest hover:bg-forest hover:text-cream",
  ghost: "bg-transparent text-forest border-0 underline",
  ochre:
    "bg-ochre text-forest border border-ochre hover:bg-ochre-deep hover:border-ochre-deep",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-[18px] py-[10px] text-[12px]",
  md: "px-[28px] py-[14px] text-[13px]",
  lg: "px-[36px] py-[18px] text-[13px]",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-block font-sans font-medium uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer disabled:opacity-50";
  const classes = `${base} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}

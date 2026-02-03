import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Button({ 
  children, 
  variant = "primary", // primary, secondary, outline, ghost
  size = "md", // sm, md, lg
  className, 
  href, 
  to, 
  onClick, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95",
    secondary: "bg-surface-subtle text-content-prominent hover:bg-surface-off border border-black/5 hover:border-black/10 active:scale-95",
    outline: "border border-content-default text-content-default hover:border-primary hover:text-primary active:scale-95 bg-transparent",
    ghost: "text-content-default hover:text-primary hover:bg-surface-subtle active:scale-95",
    white: "bg-white text-content-prominent hover:bg-gray-50 shadow-md hover:shadow-lg active:scale-95"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = clsx(baseStyles, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

import React from "react";

export const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-zinc-800 text-zinc-300 border-zinc-700",
    live: "bg-rose-500/10 text-rose-400 border-rose-500/30 font-semibold",
    info: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  };

  return (
    <span
      className={`inline-flex items-center text-xs px-2 py-0.5 rounded-full border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

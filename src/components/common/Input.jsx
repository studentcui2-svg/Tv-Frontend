import React from "react";

export const Input = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  className = "",
  icon: Icon,
}) => {
  return (
    <div className={`relative flex items-center w-full ${className}`}>
      {Icon && (
        <Icon className="absolute left-3 w-4 h-4 text-zinc-500 pointer-events-none" />
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ${
          Icon ? "pl-9 pr-3" : "px-3"
        }`}
      />
    </div>
  );
};

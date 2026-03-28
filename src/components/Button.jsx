import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-gradient-to-r from-cyan-500 to-blue-500",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-5 py-3 rounded-2xl ${bgColor} ${textColor} ${className} shadow-lg shadow-cyan-500/20 transition-transform duration-300 ease-out hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/40`}
      {...props}
    >
      {children}
    </button>
  );
}

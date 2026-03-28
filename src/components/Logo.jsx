import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div className="inline-flex items-center justify-center rounded-3xl bg-slate-100/90 p-2 shadow-lg shadow-slate-950/20">
      <img
        src="/images/logo.png"
        alt="BlogNest"
        style={{ width }}
        className="h-auto"
      />
    </div>
  );
}

export default Logo;

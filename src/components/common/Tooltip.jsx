import React, { useState } from "react";

export const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs rounded whitespace-nowrap z-50 shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
};

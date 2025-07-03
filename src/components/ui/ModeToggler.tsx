import React from "react";

const ModeToggler = () => {
  // Placeholder for dark/light mode toggle logic
  return (
    <button
      className="ml-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
      aria-label="Toggle dark/light mode"
      title="Toggle dark/light mode"
      disabled
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71" />
      </svg>
    </button>
  );
};

export default ModeToggler;

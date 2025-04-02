import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-container">
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          <span className="toggle-icon">[◐]</span>
        ) : (
          <span className="toggle-icon">[◑]</span>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;

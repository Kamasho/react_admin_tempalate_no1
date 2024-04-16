import React from 'react'
import "./themeToggle.css";

export default function ThemeToggle({handleThemeChange, isChecked}) {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleThemeChange}
        isChecked={isChecked}
      />
      <label htmlFor="check">{isChecked ? "Light Mode" : "Dark Mode"}</label>
    </div>
  );
}

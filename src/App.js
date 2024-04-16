import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleMode() {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <div className="container">
      <Navbar darkMode={isDarkMode} toggleDarkMode={toggleMode} />
      <Main darkMode={isDarkMode} />
    </div>
  );
}

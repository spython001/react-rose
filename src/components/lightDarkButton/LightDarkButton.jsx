// src/components/ThemeToggle.js
import { useState, useEffect } from 'react';
import './lightDarkButton.css'
import { Brightness2, WbSunny } from '@mui/icons-material';

const LightDarkButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the user's preferred theme and set it initially
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(userPrefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };  

  useEffect(() => {
    // Update the document's root class to toggle dark mode
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme} className={`theme-button ${isDarkMode ? 'dark' : 'light'}`}>
        {isDarkMode ? <Brightness2 /> : <WbSunny />}
      </button>
    </div>
  );
};

export default LightDarkButton;

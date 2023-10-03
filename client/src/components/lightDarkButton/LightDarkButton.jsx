// src/components/ThemeToggle.js
import { useState, useEffect } from 'react';
import './lightDarkButton.css'
import { Brightness2, WbSunny } from '@mui/icons-material';

const LightDarkButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the user's preferred theme and set it initially
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: light)').matches; //changed the 'dark' here to 'light' in order to get the dark-blue color at initial instance or state
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
        {isDarkMode ? <WbSunny /> : <Brightness2 />}
      </button>
    </div>
  );
};

export default LightDarkButton;

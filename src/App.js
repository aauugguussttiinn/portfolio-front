// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

// PAGES IMPORTS
import Home from 'pages/Home/Home';

// COMPONENTS IMPORTS
import Navigation from 'components/Navigation/Navigation';
import DarkMode from 'context/darkMode';
import DarkModeButton from 'components/DarkModeButton/DarkModeButton';


function App() {

  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    if (isDark) {
      const body = document.querySelector("#root");
      body.classList.add("dark-mode");
    }
  }, [isDark]);



  const toogleMode = () => {
    const body = document.querySelector("#root");
    body.classList.toggle("dark-mode");
    localStorage.setItem("themePreference", String(!isDark));
    setIsDark(!isDark);
  };

  return (
    <Router>
      <DarkMode.Provider value={{ isDark, toogleMode: toogleMode }}>
        <Navigation />
        <DarkModeButton/>
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </DarkMode.Provider>
    </Router>
  );
}

export default App;




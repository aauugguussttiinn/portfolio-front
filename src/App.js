// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES IMPORTS
import Home from 'pages/Home/Home';

// COMPONENTS IMPORTS
import Navigation from 'components/Navigation/Navigation';
import DarkMode from 'components/context/darkMode';
import DarkModeBtn from 'components/DarkModeButton';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </Router>
  );
}

export default App;




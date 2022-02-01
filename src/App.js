import logo from './logo.svg';
import './App.css';

// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES IMPORTS
import Home from 'components/pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </Router>
  );
}

export default App;




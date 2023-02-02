
import{ BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import Home from './pages/Home/Home';
import Single from './pages/Single/Single';
import Navigation from './pages/Navigation/Navigation'

function App() {
  return (

    <div className="App">
      
    <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Single />} />
        </Routes>
    </Router>

    </div>
  );
}

export default App;

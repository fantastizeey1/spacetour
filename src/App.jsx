import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Crew from './components/crew';
import Technology from './components/technology';
import Destination from './components/destination';
import { Header, Main } from './components/home'; // Corrected import

function App() {
  return (
    <Router>
      <Header /> {/* Include Header component outside the Routes */}
      <Routes>
        <Route path="/" element={<Main />} exact /> {/* Use Main component for the homepage */}
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  )
}

export default App;

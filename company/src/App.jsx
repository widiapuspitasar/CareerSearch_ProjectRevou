import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Yourcompanypage from './pages/yourcompanypage';
import Aboutus from './pages/aboutuspage';
import Signup from './pages/signup';
import Login from './pages/login';
import Mainpage from './pages/mainpage/mainpage';
import './App.css'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/yourcompany" element={<Yourcompanypage />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mainpage" element={<Mainpage />} />
    </Routes>
  </Router>
  );
}

export default App;


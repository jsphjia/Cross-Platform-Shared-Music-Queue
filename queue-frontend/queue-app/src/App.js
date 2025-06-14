import logo from './logo.svg';
import './App.css';

// import libraries
import axios from 'axios';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// importing pages
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

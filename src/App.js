import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>

    </Router>
    </>
  );
}

export default App;

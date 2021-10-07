import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/CustomNavbar';
import Footer from './components/CustomFooter';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

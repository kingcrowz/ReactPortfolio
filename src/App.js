import React, { useState } from 'react';
import './App.css';
import Header from './components/header.js'
import AboutMe from './components/aboutMe.js';
import Portfolio from "./components/portfolio";
import Footer from './components/footer';
import Contact from './components/contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {
  
  return (
    <Router>
    <div className="App">     
      <Header /> 
      <Switch>
        <Route exact path='/'>
          <Portfolio />
        </Route>
        <Route exact path='/about'>
          <AboutMe />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/portfolio'>
          <Portfolio />
        </Route>
      </Switch>
      <Footer />
    </div>

  </Router>
  );
}

export default App;
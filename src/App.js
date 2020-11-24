import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './contents/Home';
import About from './contents/About';
import Interests from './contents/Interests';
import SlideRoutes from 'react-slide-routes';
import Resume from './contents/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="container">
      <Navigation/>
      <br></br>
      
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/interests">
        <Interests/>
      </Route>
      <Route path="/resume">
        <Resume/>
      </Route>

      <Footer/>
    </div>
    </Router>
  );
}

export default App;

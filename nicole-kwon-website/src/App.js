import './App.css';
import React from 'react';
import SparklyCursor from './components/SparklyCursor';
import {
  Link,
  Router, 
  Routes, 
  Route
} from 'react-router-dom'

import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import ThisWebsite from './components/ThisWebsite';
import Deeper from './components/Deeper';
import SnowFall from './components/SnowFall';
import TerrierExchange from './components/TerrierExchange';
import SmartCommute from './components/SmartCommute';
import PhoneProtector from './components/PhoneProtector';

function App() {
  return (
    <>
      <SparklyCursor />
      <Routes>
        <Route path="/this-is-nicole-kwon" element={ <Home/> } />
        <Route path="/projects" element={ <Work/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/thiswebsite" element={ <ThisWebsite/> } />
        <Route path="/deeper" element={ <Deeper/> } />
        <Route path="/snowfall" element={ <SnowFall/> } />
        <Route path="/terrierexchange" element={ <TerrierExchange/> } />
        <Route path="/smartcommute" element={ <SmartCommute/> } />
        <Route path="/phoneprotector" element={ <PhoneProtector/> } />
      </Routes>
    </>
  );
}

export default App;
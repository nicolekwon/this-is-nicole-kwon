import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom'

import About from './components/About';
import Work from './components/Work';

/*
<BrowserRouter>
  <Routes>
    <Route path="/this-is-nicole-kwon">
      <App />
    </Route>
    <Route path="/work">
      <Work />
    </Route>
    <Route path="/about">
      <About />
    </Route>
  </Routes>
</BrowserRouter>

*/ 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

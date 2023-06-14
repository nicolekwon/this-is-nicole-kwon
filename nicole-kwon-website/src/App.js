import './App.css';
import React from 'react';
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      <Fade top duration={2000}>
        <h1 className="Intro"> hi, i'm nicole </h1>
      </Fade>
    </div>
  );
}

export default App;
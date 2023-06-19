import './App.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import menu from './icons/menu.png';
import star from './icons/star.png';
import photo from './icons/photo.jpg';
import software_engineer from './icons/software_engineer.JPEG';

function App() {

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  const [change, setChange] = React.useState(false);

  return (
    <>
    <div className="container">
      <div className="navbar">
        <Fade right when={change} duration={2000}>
          <div className="navheaders">
            <p className="headers"> work </p>
            <p className="headers"> about </p>
          </div>
        </Fade>
        <button className="menu" onClick={() => setChange(!change)}> 
          <img src={menu} className="menuicon" alt="menuicon"/>
        </button>
      </div>
      <div className="body">
        <div>
          <p className="intro"> hi, i'm nicole, </p>
          <p className="intro"> a software engineer and aspiring product manager </p>
          <p className="intro"> based in jersey city, new jersey </p>
        </div>
        <div>
          <img src={software_engineer} className="photo" alt="photo"/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
import './ThisWebsite.css';
import React from 'react';
import {
  Link,
} from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import close from '../icons/close.png';
import NavBar from './NavBar';

function ThisWebsite() {

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  return (
    <>
      <div className="container">
        <NavBar />
          <div className="projectcontainer">
            <Slide bottom>
              <Link to="/work">
                <img src={close} className="closeicon" alt="close"/>
              </Link>
              <p> this website </p>
            </Slide>
          </div>
      </div>
    </>
  );
}

export default ThisWebsite;
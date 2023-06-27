import './NavBar.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import menu from '../icons/menu.png';
import star_outline from '../icons/star_outline.png';

import {
    Link,
  } from 'react-router-dom';
  
function NavBar() {

  const [change, setChange] = React.useState(false);

  return (
    <>
    <div className="container">
      <div className="navbar">
        <Link to="/this-is-nicole-kwon" className="navstart">
          <img src={star_outline} alt="staroutline" className="staroutline"/>
        </Link>
        <div className="navend">
          <Fade right when={change} duration={2000}>
            <ul className="navheaders">
              <li className="headers"><Link to="/work" className="headers">work</Link></li>
              <li className="headers"><Link to="/about" className="headers">about</Link></li>
            </ul>
          </Fade>
          <button className="menu" onClick={() => setChange(!change)}> 
            <img src={menu} className="menuicon" alt="menuicon"/>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default NavBar;
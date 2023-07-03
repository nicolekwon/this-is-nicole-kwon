import './Work.css';
import React from 'react';

import thiswebsite from '../icons/thiswebsite.png';
import deeper from '../icons/deeper.png';
import snowfall from '../icons/snowfall.png';
import terrierexchange from '../icons/terrierexchange.png';
import iphoneprotector from '../icons/iphoneprotector.png';
import smartcommute from '../icons/smartcommute.png';
import learnmore from '../icons/learnmore.png';

import {
  Link,
} from 'react-router-dom';

import NavBar from './NavBar';
import Warning from './Warning';

function Work() {

  const [isWidth, setisWidth] = React.useState(false);
  const [isHeight, setisHeight] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    setisWidth(window.matchMedia("only screen and (max-width: 1350px)").matches);
    setisHeight(window.matchMedia("only screen and (max-height: 627px)").matches);
    return () => (document.body.style.overflow = "scroll");
  });

  React.useEffect(() => {
    function handleResize() {
      setisWidth(window.matchMedia("only screen and (max-width: 1350px)").matches);
      setisHeight(window.matchMedia("only screen and (max-height: 627px)").matches);
    }
    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize);
    }

  });

  return(
    <>
    { isWidth || isHeight ?
    <Warning /> 
    :
    <div className="container">
      <NavBar />
      <div className="workbody">
        <p className="worktitle">projects</p>
        <div className="workdescription1">
          <div className="project">
            <div className="projectheading">
              <img src={thiswebsite} className="projecticon" alt="thiswebsite"/>
              <p className="projectname">this-is-nicole-kwon</p>
            </div>
            <p className="projectbody">is a web application &#40;what you're looking at right now!&#41; for honing react knowledge and showcasing projects.</p>
            <Link to="/thiswebsite">
              <img src={learnmore} className="learnmorebutton" alt="learnmore"/>
            </Link>
          </div>
          <div className="project">
            <div className="projectheading">
              <img src={deeper} className="projecticon" alt="deeper"/>
              <p className="projectname">deeper</p>
            </div>
            <p className="projectbody">is a react native mobile application addressing the lack of communication between those suffering from mental health disorders and their loved ones.</p>
            <Link to="/deeper">
              <img src={learnmore} className="learnmorebutton" alt="learnmore"/>
            </Link>
          </div>
          <div className="project">
            <div className="projectheading">
              <img src={snowfall} className="projecticon" alt="snowfall"/>
              <p className="projectname">snowfall</p>
            </div>
            <p className="projectbody">is a winter-themed game utilizing a video graphics array &#40;vga&#41; display, speaker, keyboard, and field programmable gate array &#40;fpga&#41;.</p>
            <Link to="/snowfall">
              <img src={learnmore} className="learnmorebutton" alt="learnmore"/>
            </Link>
          </div>
        </div>
        <div className="workdescription2">
          <div className="project">
            <div className="projectheading">
              <img src={terrierexchange} className="projecticon" alt="terrierexchange"/>
              <p className="projectname">terrier exchange</p>
            </div>
            <p className="projectbody">is an android mobile application acting as an online marketplace for students to buy, rent, and sell textbooks.</p>
            <Link to="/terrierexchange">
              <img src={learnmore} className="learnmorebutton" alt="learnmore"/>
            </Link>
          </div>
          <div className="project">
            <div className="projectheading">
              <img src={iphoneprotector} className="projecticon" alt="iphoneprotector"/>
              <p className="projectname">iphone protector</p>
            </div>
            <p className="projectbody">is a prototype of a case that electromechanically deploys a “spider-leg” mechanism to protect a dropped iphone.</p>
            <Link to="/phoneprotector">
              <img src={learnmore} className="learnmorebutton" alt="learnmore"/>
            </Link>
          </div>
          <div className="project">
            <div className="projectheading">
              <img src={smartcommute} className="projecticon" alt="smartcommute"/>
              <p className="projectname">smartcommute</p>
            </div>
            <p className="projectbody">is a matlab project for aiding commuters in determining when to leave their house for the most efficient commute.</p>
            <Link to="/smartcommute">
              <img src={learnmore} className="learnmorebutton" alt="learnmore"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
    }
    </>
    );
  }

export default Work;
import './PhoneProtector.css';
import React from 'react';
import {
  Link,
} from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import close from '../icons/close.png';
import phoneprotectorvid from '../icons/phoneprotectorvid.mp4';
import NavBar from './NavBar';

function PhoneProtector() {

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  return (
    <>
      <div className="container">
        <NavBar />
        <div className="projectdivider">
          <div className="projectcontainer">
            <Slide bottom>
              <Link to="/projects">
                <img src={close} className="closeicon" alt="close"/>
              </Link>
            </Slide>
            <Slide bottom cascade>
              <p className="projectheader"> iphone protector </p>
              <p className="projectdate"> oct 2019 - dec 2019 </p>
            </Slide>
            <Slide bottom>
              <p className="projectdescription"> 4 engineers and i created a real-time, electromechanically deployable prototype that protects an iphone from the impact of being dropped. the case around the phone is 6” x 4” x 3” to make it portable and includes a reset button to make it reusable. </p>
              <p className="projectdescription"> a battery-powered arduino is connected to an accelerator on the case to detect the phone free-falling and causes the legs to deploy using a servo motor. the legs start in resting position in order to minimize the volume of the case. when deployed, they turn 90 degrees and become vertical in order to absorb impact from the x- and y-plane. the z-plane is protected by adding two springs to each servo in order to absorb impact on both sides of the case. </p>
            </Slide>
          </div>
          <div className="projectcarousel">
            <video controls width="100%">
              <source src={phoneprotectorvid} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneProtector;
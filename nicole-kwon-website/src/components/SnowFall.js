import './SnowFall.css';
import React from 'react';
import {
  Link,
} from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import close from '../icons/close.png';
import github from '../icons/github.png';
import snowfallvid from '../icons/snowfallvid.mp4';
import NavBar from './NavBar';
import Warning from './Warning';

function SnowFall() {

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
        <div className="projectdivider">
          <div className="projectcontainer">
            <Slide bottom>
              <Link to="/projects">
                <img src={close} className="closeicon" alt="close"/>
              </Link>
            </Slide>
            <Slide bottom cascade>
              <p className="projectheader"> snowfall </p>
              <p className="projectdate"> nov 2020 - dec 2020 </p>
            </Slide>
            <Slide bottom>
              <p className="projectdescription"> 4 engineers and i wanted to create an entertaining and interactive game that builds on our previous experience with the fpga from our logic design class. </p>
              <p className="projectdescription"> snowfall involves the player to collect as much “snow” &#40;white blocks that are randomly generated&#41; as possible with a paddle in a certain amount of allotted time &#40;90 seconds&#41;. to start the game, the player should press the enter key. the player controls the paddle on the bottom of the screen with the left and right arrow keys &#40;left and right respectively&#41; and the space bar &#40;stop&#41; on the keyboard. </p>
              <p className="projectdescription"> after collecting 10 blocks of snow, the difficulty of the game increases. snow blocks fall twice as fast, and there are “bombs” &#40;red blocks&#41; that the user must avoid. points are earned for every snow block the user collects, and one point is deducted for every bomb they fail to avoid. these points are shown on the 7-segment display, and once the timer is up, the game is over. to restart the game, the player should press the backspace key. for the background music, the song “jingle bells” plays on the fpga speaker output. a speaker or headphones needs to be connected to the jack on the fpga to properly hear this. </p>
              <a href="https://github.com/jamih/ec311_snowfall" target="_blank" rel="noreferrer">
                <img src={github} className="sfgithub" alt="github"/>
              </a>
            </Slide>
          </div>
          <div className="projectcarousel">
            <video controls width="100%">
              <source src={snowfallvid} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    }
    </>
  );
}

export default SnowFall;
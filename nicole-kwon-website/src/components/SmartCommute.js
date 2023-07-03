import './SmartCommute.css';
import React from 'react';
import {
  Link,
} from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import close from '../icons/close.png';
import NavBar from './NavBar';
import github from '../icons/github.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import smartcommute1 from '../icons/smartcommute1.png';
import smartcommute2 from '../icons/smartcommute2.png';
import smartcommute3 from '../icons/smartcommute3.png';
import smartcommute4 from '../icons/smartcommute4.png';
import smartcommute5 from '../icons/smartcommute5.png';

import Warning from './Warning';

function SmartCommute() {

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
              <p className="projectheader"> smartcommute </p>
              <p className="projectdate"> apr 2019 - may 2019 </p>
            </Slide>
            <Slide bottom>
              <p className="projectdescription"> as the working population increases, commuting time has become an issue, especially in dense urban areas. a major issue for commuting workers is making it to work on time by avoiding traffic and the influx of other commuters. </p>
              <p className="projectdescription"> therefore, a mechanical engineer, a computer engineer, and i wanted workers to have a way to plan accordingly and get to work on time. we used the 2017 dataset “means of transportation to work by time leaving home to go to work universe: workers 16 years and over who did not work at home” by converting it into a .txt file and extracting the information through matlab. </p>
              <p className="projectdescription"> the application we created has two inputs: the zipcode and the time interval at which the worker desires to leave. the zipcode is inputted through a textbox. the time intervals are predetermined and displayed and chosen through a drop-down menu. the code matches the zipcode to a row in the database and output the number of people leaving for work at the selected time interval. by knowing the number of people leaving at a particular time through smartcommute, people can determine if the time that they decide to leave is a busy time or not. </p>
              <a href="https://github.com/nicolekwon/SmartCommute" target="_blank" rel="noreferrer">
                <img src={github} className="github" alt="github"/>
              </a>
            </Slide>
          </div>
          <div className="scprojectcarousel">
            <Carousel showArrows={true} showIndicators={true} showThumbs={false} showStatus={true} useKeyboardArrows={true}>
              <div>
                <img src={smartcommute1} />
              </div>
              <div>
                <img src={smartcommute2} />
              </div>
              <div>
                <img src={smartcommute3} />
              </div>
              <div>
                <img src={smartcommute4} />
              </div>
              <div>
                <img src={smartcommute5} />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    }
    </>
  );
}

export default SmartCommute;
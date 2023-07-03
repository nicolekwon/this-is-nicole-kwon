import './Deeper.css';
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
import deeper1 from '../icons/deeper1.png';
import deeper2 from '../icons/deeper2.png';
import deeper3 from '../icons/deeper3.png';
import deeper4 from '../icons/deeper4.png';
import deeper5 from '../icons/deeper5.png';
import deeper6 from '../icons/deeper6.png';
import deeper7 from '../icons/deeper7.png';
import deeper8 from '../icons/deeper8.png';
import deeper9 from '../icons/deeper9.png';
import deeper10 from '../icons/deeper10.png';

import Warning from './Warning';

function Deeper() {

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
              <p className="projectheader"> deeper </p>
              <p className="projectdate"> dec 2021 - may 2022 </p>
            </Slide>
            <Slide bottom>
              <p className="projectdescription"> 3 computer engineers and i were passionate about mental health, and we came together to try helping others in our community through a mobile application. </p>
              <p className="projectdescription"> from a survey that we conducted, the majority of loved ones who participated stated that the methods that they used to support the mental health consumer was less than a 5 on an effectiveness scale from 1 to 10. therefore, it is difficult for both parties to empathize with each other and understand each other's needs. the loved one wants to support the mental health consumer but does not know the best strategies usually to do so; at the same time, the mental health consumer wants the loved one to understand and not burden them. </p>
              <p className="projectdescription"> there is the home page, which allows the user to monitor their mental health and take a survey through the daily check-up; the community feed page, which allows the user to post something and interact or search up existing posts; the journal page, which allows the user to write about anything and check their past entries; and the inbox page, which allows the user to send their own messages, read and filter messages sent to them, and search up messages. </p>
              <a href="https://github.com/dli0793/deeper" target="_blank" rel="noreferrer">
                <img src={github} className="github" alt="github"/>
              </a>
            </Slide>
          </div>
          <div className="dprojectcarousel">
            <Carousel showArrows={true} showIndicators={true} showThumbs={false} showStatus={true} useKeyboardArrows={true}>
              <div>
                <img src={deeper1} />
              </div>
              <div>
                <img src={deeper2} />
              </div>
              <div>
                <img src={deeper3} />
              </div>
              <div>
                <img src={deeper4} />
              </div>
              <div>
                <img src={deeper5} />
              </div>
              <div>
                <img src={deeper6} />
              </div>
              <div>
                <img src={deeper7} />
              </div>
              <div>
                <img src={deeper8} />
              </div>
              <div>
                <img src={deeper9} />
              </div>
              <div>
                <img src={deeper10} />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    }
    </>
  );
}

export default Deeper;
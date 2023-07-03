import './ThisWebsite.css';
import React from 'react';
import {
  Link,
} from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import close from '../icons/close.png';
import NavBar from './NavBar';
import github from '../icons/github.png';
import Warning from './Warning';

function ThisWebsite() {

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
          <div className="projectcontainer">
            <Slide bottom>
              <Link to="/projects">
                <img src={close} className="closeicon" alt="close"/>
              </Link>
            </Slide>
            <Slide bottom cascade>
              <p className="projectheader"> this-is-nicole-kwon </p>
              <p className="projectdate"> jun 2023 </p>
            </Slide>
            <Slide bottom>
              <p className="projectdescription"> in my spare time, i created this web application from scratch as a passion project. i really wanted to refresh my knowledge on the react framework and javascript, and i've always thought about creating a portfolio to showcase my work and myself. </p>
              <p className="projectdescription"> the npm package, “gh-pages,” helped me deploy this react web application to github pages and made the process a lot more seamless. i also used the npm package, “react-reveal,” to help bring animation to the text and navigation between pages in my web app. finally, i used react-responsive-carousel, another npm package, to allow for a gallery of photos for my projects in the same place. </p>
              <p className="projectdescription"> in the future, i would love to make this web application mobile-friendly and more accessible, as well as adding more information that expand on my previous work experience. </p>
              <a href="https://github.com/nicolekwon/this-is-nicole-kwon" target="_blank" rel="noreferrer">
                <img src={github} className="github" alt="github"/>
              </a>
            </Slide>
          </div>
      </div>
    }
    </>
  );
}

export default ThisWebsite;
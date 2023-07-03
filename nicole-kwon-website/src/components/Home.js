import './Home.css';
import 'normalize.css';
import React from 'react';
import star from '../icons/star.png';
import software_engineer from '../icons/software_engineer.JPEG';
import aspiring_product_manager from '../icons/aspiring_product_manager.JPEG';
import bu_alum from '../icons/bu_alum.JPEG';
import brother from '../icons/brother.JPEG';
import violist from '../icons/violist.JPEG';
import animal_lover from '../icons/animal_lover.JPEG';
import email from '../icons/email.png';
import linkedin from '../icons/linkedin.png';
import resume from '../icons/resume.png';

import NavBar from './NavBar';
import Warning from './Warning';

function Home() {

  const [time, setTime] = React.useState(0);

  const titles = ["a junior swe", "an aspiring pm", "a bu alumna", "an ot brother", "a violinist & violist", "a proud cat mom"];
  const images = [software_engineer, aspiring_product_manager, bu_alum, brother, violist, animal_lover];

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

  React.useEffect(() => {
    const interval = setInterval(() => {
        setTime(time => time+1);
    }, 1500);
    if (time == 6)
    {
        setTime(time => 0);
    }
    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
    { isWidth || isHeight ?
    <Warning /> 
    :
    <div className="container">
      <NavBar />
      <div className="body">
        <div className="intro">
          <div className="firstline">
            <img src={star} className="star" alt="star"/>
            <p className="intro1"> hi, i'm nicole, </p>
          </div>
          <p className="intro2"> {titles[time]} </p>
          <p className="intro3"> based in jersey city, new jersey. </p>
          <div className="socials">
            <a href="mailto:kwonn@bu.edu">
                <img src={email} className="email" alt="email"/>
            </a>
            <a href="https://www.linkedin.com/in/kwonn/" target="_blank" rel="noreferrer">
                <img src={linkedin} className="linkedin" alt="linkedin"/>
            </a>
            <a href="/nicole_kwon_resume.pdf" download>
                <img src={resume} className="resume" alt="resume"/>
            </a>
          </div>
        </div>
        <div>
          <img src={images[time]} className="photo" alt="photo"/>
        </div>
      </div>
    </div>
    }
    </>
  );
}

export default Home;
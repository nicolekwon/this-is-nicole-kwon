import './App.css';
import React from 'react';
import Fade from 'react-reveal/Fade';
import menu from './icons/menu.png';
import star from './icons/star.png';
import star_outline from './icons/star_outline.png';
import photo from './icons/photo.jpg';
import software_engineer from './icons/software_engineer.JPEG';
import {
  Link
} from 'react-router-dom'

function App() {
  /* 
  // For sparkly cursor 
  let trailArr = [1, .9, .8, .5, .25, .6, .4, .3, .2];
  var sparklesArr = [];
  
  function trailAnimation(e, i, maxYTranslation) {
    let elem = document.createElement('div');
  
    elem = styleSparkle(elem, e, i);
    
    elem.classList.add("sparkle");
  
    document.body.appendChild(elem);
  
    elem = addAnimationProperties(elem, i, maxYTranslation);
    
    sparklesArr.push(elem);
  }
  
  function styleSparkle(elem, e, i) {
    let j = (1 - i) * 50;
    let size = Math.ceil(Math.random() * 10 * i) + 'px';
    
    elem.style.top = e.pageY - window.scrollY + Math.round(Math.random() * j - j / 2) + 'px';
    elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
    
    elem.style.width = size;
    elem.style.height = size;
    elem.style.borderRadius = size;
    
    elem.style.background = 'hsla(' +
      Math.round(Math.random() * 160) + ', ' +
      '60%, ' +
      '90%, ' +
      i + ')';
    
    return elem;
  }
  
  function addAnimationProperties(elem, i, maxYTranslation) {
    const ANIMATION_SPEED = 1000;
    let lifeExpectancy = Math.round(Math.random() * i * ANIMATION_SPEED);
  
    elem.maxYTranslation = maxYTranslation;
    elem.animationSpeed = ANIMATION_SPEED;
    elem.created = Date.now();
    elem.diesAt = elem.created + lifeExpectancy;
  
    return elem;
  }
  
  function moveSparkles() {
    let remove = false;
    let moveIndex = 0;
    let sparkle;
  
    for (let i = 0; i < sparklesArr.length; i++) {
      sparkle = sparklesArr[i];
      remove = sparkle.diesAt <= Date.now();
      
      if (remove) {
        document.body.removeChild(sparkle);
      } else {
        if (sparkle.maxYTranslation) {
          let interpolation = calculateInterpolation(sparkle);
          sparkle.style.transform = `translateY(${interpolation}px)`; 
        }
        
        sparklesArr[moveIndex++] = sparkle;  
      }
    }
    
    sparklesArr.length = moveIndex;
    requestAnimationFrame(moveSparkles);
  }
  
  function calculateInterpolation(sparkle) {
    let currentMillis = Date.now();
    let lifeProgress = (currentMillis - sparkle.created) / sparkle.animationSpeed;
    let interpolation = sparkle.maxYTranslation * lifeProgress;
    
    return interpolation;
  }
  
  window.addEventListener('mousemove', function (e) {
    trailArr.forEach((i) => {trailAnimation(e, i)});
  
    let maxYTranslation = '80';
    trailArr.forEach((i) => {trailAnimation(e, i, maxYTranslation)});
  }, false);
  
  moveSparkles();
  */

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

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
      <div className="body">
        <div className="intro">
          <div className="firstline">
            <img src={star} className="star" alt="star"/>
            <p className="intro1"> hi, i'm nicole, </p>
          </div>
          <p className="intro2"> a software engineer </p>
          <p className="intro3"> based in jersey city, new jersey. </p>
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
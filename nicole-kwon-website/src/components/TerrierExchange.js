import './TerrierExchange.css';
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
import terrierexchange1 from '../icons/terrierexchange1.png';
import terrierexchange2 from '../icons/terrierexchange2.png';
import terrierexchange3 from '../icons/terrierexchange3.png';
import terrierexchange4 from '../icons/terrierexchange4.png';
import terrierexchange5 from '../icons/terrierexchange5.png';

function TerrierExchange() {

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  return (
    <>
      <div className="tecontainer">
        <NavBar />
        <div className="teprojectdivider">
          <div className="teprojectcontainer">
            <Slide bottom>
              <Link to="/projects">
                <img src={close} className="closeicon" alt="close"/>
              </Link>
            </Slide>
            <Slide bottom cascade>
              <p className="teprojectheader"> terrierexchange </p>
              <p className="teprojectdate"> nov 2019 - dec 2019 </p>
            </Slide>
            <Slide bottom>
              <p className="teprojectdescription"> inspired by facebook marketplace, 4 computer engineers and i wanted to personalize and organize the experience of buying and selling textbooks from students to students. </p>
              <p className="teprojectdescription"> we decided on an android app and named it terrierexchange, focusing on boston university students who can filter books based on their majors. there is the sign-in and registration pages, a dashboard to buy textbooks from boston university's 8 different colleges, a selling page to upload an image and description of a textbook, and a shopping cart screen to see what's in the cart and proceed to checking out. firebaseui auth handled signing in users with email addresses and passwords, and firebase sdk authentication handled registering users. cloud storage from google's firebase authentication stored the information and images that users will upload to sell their textbooks. </p>
              <p className="teprojectdescription"> if we had more time, we would have implemented a renting and bidding system to allow for more flexibility for what students want to do with their textbooks. </p>
              <a href="https://github.com/nicolekwon/TerrierExchange" target="_blank" rel="noreferrer">
                <img src={github} className="github" alt="github"/>
              </a>
            </Slide>
          </div>
          <div className="teprojectcarousel">
            <Carousel showArrows={true} showIndicators={true} showThumbs={false} showStatus={true} useKeyboardArrows={true}>
              <div>
                <img src={terrierexchange1} />
              </div>
              <div>
                <img src={terrierexchange2} />
              </div>
              <div>
                <img src={terrierexchange3} />
              </div>
              <div>
                <img src={terrierexchange4} />
              </div>
              <div>
                <img src={terrierexchange5} />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default TerrierExchange;
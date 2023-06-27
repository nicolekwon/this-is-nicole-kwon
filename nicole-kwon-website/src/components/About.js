import './About.css';
import React from 'react';
import about_photo from '../icons/about_photo.JPG';

import NavBar from './NavBar';

function About() {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  return(
  <div className="container">
    <NavBar />
    <div className="aboutbody">
      <div className="aboutheader">
        <p className="abouttitle">about</p>
        <img src={about_photo} className="aboutphoto" alt="aboutphoto"/>
      </div>
      <div className="aboutdescription">
        <p className="aboutheading"> hi there, nice to meet you~ </p>
        <p className="aboutparagraph"> my name is nicole kwon &#40;she/her/hers&#41;. i graduated from boston university and its honor college in may 2022. i majored in computer engineering, minored in innovation and entrepreneurship, and had a concentration in technology innovation. through my diverse coursework, i was able to gain both the technical and interpersonal skills needed to bridge the gap between technology and business. </p>
        <p className="aboutparagraph"> outside of the classroom, i was a part of the technology innovation scholars program as an inspiration ambassador, where i facilitated presentations and mentored local middle schoolers and high schoolers in the greater boston area. i was also a brother and new member educator in theta tau, a co-ed engineering fraternity, where i participated in service, brotherhood, and professionalism, as well as delegated tasks and taught these responsibilities to 24 recruited pledges during my last semester of college. </p>
        <p className="aboutparagraph"> currently, i work as a junior software engineer at publicis sapient, a digital transformation consulting company--i've been helping keurig with their agile frontend development using react native. on the quality assurance side, i've been validating jira stories and defects from active sprints. by utilizing testflight and postman, i've been emulating the app and brewers for testing and ensuring successful product delivery. </p>
        <p className="aboutparagraph"> 
          <span>if you have any questions, feel free to reach out to me at </span>
          <a href="mailto:kwonn@bu.edu" className="aboutlink">
            <span>kwonn@bu.edu</span>
          </a>
          <span>, connect with me on </span>
          <a href="https://www.linkedin.com/in/kwonn/" target="_blank" rel="noreferrer" className="aboutlink">
            <span>linkedin</span>
          </a>
          <span>, or download my resume </span>
          <a href="/nicole_kwon_resume.pdf" className="aboutlink" download>
            <span>here</span>
          </a>
          <span>! i always love meeting new people and learning new things from them and about them :&#41; </span>
        </p>
      </div>
    </div>
  </div>);
}

export default About;
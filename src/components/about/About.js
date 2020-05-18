import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import myPic from "../../images/My_pic.jpg";
import "./about.css";

const aboutMe = {
  para1: `I have done MBA (IT), I am a passionate about coding and developing websites,
            having knowledge of website optimization, SEO, Reusable coding.`,
  para2: `Experience in creating static and dynamic websites with the skills of HTML5,
          CSS3, Javascript, JQuery, Bootstrap and Angular.`,
  para3: `I have more than 3 years of experience as Frontend developer/UI developer with the skill set of
          HTML5, CSS3, Javascript, JQuery, Bootstrap and Angular.`
}

const SocilaLinks = [
  {link: "https://www.facebook.com/ravi7787", title: "Facebook", icons: faFacebookF},
  {link: "https://plus.google.com/114867950176533446856", title: "Google Plus", icons: faGooglePlusG},
  {link: "https://www.twitter.com/@RockingRavicha", title: "Twitter", icons: faTwitter},
  {link: "https://www.linkedin.com/in/ravi-chandra-1184a885", title: "LinkedIn", icons: faLinkedinIn}
];

function About(){
  return (
    <div className="page about">
    <div className="container">
      <div className="row m-0">
        <div className="heading">
          <h2>About Me</h2>
        </div>
      </div>
      <div className="row m-0 justify-content-between">
        <div className="col-sm-12 col-md-4 col-lg-3 p-0">
          <div className="card bg-transparent flex-md-column border-0">
            <img className="card-img-top img-fluid col-md-12 col-6 p-0" src={ myPic } alt="My Pic" />
            <div className="card-body">
              <h5 className="card-title">Ravi Chandra P</h5>
              <p>Frontend Developer</p>
              <p> <a target="_blank" href="mailto:chandraravi280@gmail.com" rel="noopener noreferrer">
                  chandraravi280@gmail.com </a></p>
              <p> +91 7353445948</p>

              <ul className="d-flex justify-content-center list-group-horizontal list-unstyled ">             
             {SocilaLinks.map((v, i) => {
               return (
               <li className="py-2 px-3" key={i}>
                <a className="d-block" href={v.link} rel="noopener noreferrer" title={v.title} target="_blank">
                      <FontAwesomeIcon icon={v.icons} />
                  </a>
               </li>
               )
             })}
             </ul>             

            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 p-0">
          <div className="about-me pt-4 pt-md-0">
            <p className="lead">{aboutMe.para1}</p>
            <p className="lead">{aboutMe.para2}</p>
            <p className="lead">{aboutMe.para3}</p>
          </div>          
        </div>
      </div>
    </div>
  </div>

)}
export default About;
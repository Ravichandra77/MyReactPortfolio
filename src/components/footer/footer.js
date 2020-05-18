import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import  "./footer.css";

export default class FooterComponent extends React.Component {
    render() {
        return (
        <div className="footer pt-sm-1 pb-sm-1">
            <div className="container">
              <div className="row justify-content-between align-items-center flex-sm-row m-0 ">
                <div className="footerText col-12 col-sm-7 p-0">
                  <p className="copyright m-0 text-sm-left"> ©Copyright
                    <span id="year"> 2020</span> 
                    - All rights reserved by Ravi Chandra </p>
                </div>
                <div className="footerLinks">
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item bg-transparent border-0">
                      <a href="https://www.facebook.com/ravi7787" rel="noopener noreferrer" title="Facebook" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent border-0">
                      <a href="https://plus.google.com/114867950176533446856" rel="noopener noreferrer" title="Google Plus" target="_blank">
                        <FontAwesomeIcon icon={faGooglePlusG} />
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent border-0">
                      <a href="https://www.twitter.com/@RockingRavicha" rel="noopener noreferrer" title="Twitter" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a></li>
                    <li className="list-group-item bg-transparent border-0">
                      <a href="https://www.linkedin.com/in/ravi-chandra-1184a885" rel="noopener noreferrer" title="LinkedIn" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
    }
}


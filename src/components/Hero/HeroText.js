import React from 'react';
import './hero.css';
import HeroButton from "./HeroButton";
import Typed from 'react-typed';

export default class HeroText extends React.Component{
constructor(props){
  super(props);
  this.state = {  
    subText: null,
    defaultTile: 'My name is Ravi Chandra',
    subTitleArray: ["UI developer", "React developer", "Front end developer" ],
    options: {
      stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 1000,
		// loop
		loop: true,
		// false = infinite
		loopCount: 100000,
		// show \
		showCursor: true,
		// character for cursor
    //cursorChar: "|" <i class="fas fa-pencil-alt"></i> need to add font awesome
    // cursorChar: <FontAwesomeIcon icon={faFacebookF} /> This won't work
    }
    }
}

// componentDidMount(){
//   let heading = () => {

//     let first = () => {
//       this.setState({subText: this.state.subTitleArray[0]})
//     }
//     let second = ()  => {
//       this.setState({subText: this.state.subTitleArray[1]})
//     }
//     let three = () => {
//       this.setState({subText: this.state.subTitleArray[2]})
//     }
//     setTimeout(first, 300);
//     setTimeout(second, 2300);
//     setTimeout(three, 4300);
//   }
//   heading();
//   setInterval(heading, 6300);

// }

  render() {
 
    return (
      <React.Fragment>
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-lg-6 p-0 pos-sm-abs position-absolute text-lg-left text-sm-center justify-content-sm-center justify-content-lg-start">
            <div className="hero-text w-100">
              <h1> {this.state.defaultTile} </h1>
              <h3> <span> A passionate </span>
                <Typed {...this.state.options} typedRef={(typed)=> { this.typed = typed; }}
                  strings={this.state.subTitleArray}
                  />
              </h3>
              <div className="middle-btn"> 
              <HeroButton variant="primary" section="about-me" url="about" btnValue="About me" />
              <HeroButton variant="outline-primary" section="contact-me" url="contact" btnValue="Contact Me" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <HeroButton section={"contact-me"} url={"contact"} btnValue="Contact Me" /> */}
    </React.Fragment>

    );
  }
}



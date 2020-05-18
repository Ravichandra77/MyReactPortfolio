import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './hero.css';
import HeroText from './HeroText';
import img1 from '../../images/1.gif';
// import img2 from '../../images/2.jpg';
import img2 from '../../images/2.gif';
import img3 from '../../images/3.gif';
import img4 from '../../images/4.gif';
// import img6 from '../../images/6.jpg';
import url from "../images.json";



export default class Heros extends React.Component{

state = {
  loading: false,
  items: [],
  options: {
    loop: true,
    items: 1,
    autoplay: 1000,
    animateIn: 'fadeIn',
    animateOut: "fadeOut",
    lazyLoad: true,
    responsive: {
      0: {
        dots: false
      },
      992: {
        dots: false
      }
    }
  }

}


render(){

return (
  <React.Fragment>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-6 p-0 order-lg-1 ml-auto">
          <OwlCarousel className="owl-theme owl-images" {...this.state.options}>
            <div className="item">
              <img alt="img1" src={img1} />
            </div>
            <div className="item">
              <img alt="img1" src={img2} />
            </div>
            <div className="item">
              <img alt="img1" src={img3} />
            </div>
            <div className="item">
              <img alt="img1" src={img4} />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
    <HeroText />
  </React.Fragment>
)
}
}
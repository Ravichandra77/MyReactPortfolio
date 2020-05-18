import React, { Component } from 'react'
import HTML from "../../images/flipcard/html.png";
import CSS from "../../images/flipcard/css.png";
import Sass from "../../images/flipcard/sass.png";
import Git from "../../images/flipcard/git.png";
import JS from "../../images/flipcard/js.png";
import BS from "../../images/flipcard/bs.png";
import react from "../../images/flipcard/react.png";
import Angular from "../../images/flipcard/angular.svg";

const flipcardImages = [
    {src: HTML, text: "HTML"},
    {src: CSS, text: "CSS"},
    {src: Sass, text: "Sass"},
    {src: Git, text: "GitHub"},
    {src: JS, text: "Javascript"},
    {src: BS, text: "Bootstrap"},
    {src: react, text: "React"},
    {src: Angular, text: "Angular"}
]
const cardText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took `;

export default class FlipCard extends Component {
    render() {
        return (
            <div className="mainCard row m-0 justify-content-md-between justify-content-around">
            {flipcardImages.map((v, i) => {
                  return (
  
                  <div className="flipcard col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
                    <div className="frontCard p-3">
                      <img className="flipimg" src={v.src} alt={v.text} />
                    </div>
                    <div className="backCard p-3 text-center">
                      <h3> {v.text} </h3>
                      <p> {cardText} </p>
                    </div>
                  </div>
                  )
                  })}
                </div>
        )
    }
}

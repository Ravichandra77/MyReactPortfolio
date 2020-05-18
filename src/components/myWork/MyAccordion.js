import React, { Component } from 'react';
import FlipCard from "./Flipcard";
import SkillBars from "./SkillBar";
import TimeLine from "./TimeLine";


import "./mywork.scss";

const SKILLS = [
    {type: "HTML", level: 90},
    {type: "CSS", level: 80},
    {type: "SCSS", level: 60},
    {type: "GitHub", level: 65},
    {type: "BootStrap", level: 80},
    {type: "JavaScript", level: 65},
    {type: "jQuery", level: 65},
    {type: "React.js", level: 50},
  ];
  
const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab.'

const data = [
  {
    title: 'Flipping cards',
    content: <FlipCard />
  },
  {
    title: 'Skills Bar',
    content: <SkillBars r="0" g="60" skills={SKILLS} />
  },
  {
    title: 'Time Line',
    content: <TimeLine />
  },
  {
    title: 'Usage guides',
    content: paragraph
  }
]


export default class MyAccordion extends Component {

    componentDidMount() {
        setTimeout(() => {
          this.setState({ collapsed: false })
        }, 500);
      }
      
    render () {
      return (
        <div {...{ className: 'wrapper mt-2' }}>
          <ul {...{ className: 'accordion-list' }}>
            {data.map((data, key) => {
              return (
                <li {...{ className: 'accordion-list__item', key }}>
                  <AccordionItem {...data} />
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }

  class AccordionItem extends React.Component {
    state = {
      opened: false
    }
    
          componentDidMount() {
        setTimeout(() => {
          this.setState({ collapsed: false })
        }, 500);

      }
    render () {
      const {
        props: {
            content,
          title
        },
        state: {
          opened
        }
      } = this
      
      return (
        <div
          {...{
            className: `accordion-item ${opened && 'accordion-item--opened'}`,
            onClick: () => { this.setState({ opened: !opened }) }
          }}
        >
          <div {...{ className: 'accordion-item__line' }}>
            <h3 {...{ className: 'accordion-item__title' }}>
              {title}
            </h3>
            <span {...{ className: 'accordion-item__icon' }}/>
          </div>
            <div {...{ className: 'accordion-item__inner' }}>
              <div {...{ className: 'accordion-item__content' }}>
                <div {...{ className: 'accordion-item__paragraph' }}>
                    {content}                
                </div>
              </div>
            </div>
        </div>
      )
    }
  }
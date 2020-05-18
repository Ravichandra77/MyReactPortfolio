import React, { Component } from 'react'

export default class SkillBars extends Component {

    constructor(props) {
        super(props);
        this.state = { collapsed: true };       
      }
      
      componentDidMount() {
        setTimeout(() => {
          this.setState({ collapsed: false })
        }, 500);

      }

    render() {
        const { collapsed } = this.state;
        const { r, g, skills } = this.props;
    
        return (  
        <div className={`${collapsed ? 'collapsed' : '' }`}>
        <ul className="skills p-0">
          {skills.map((skill, index) =>
          <li key={skill.type}
            style={{ width: `${skill.level}%`, backgroundColor: `rgb(${r + index + 2}, ${g * 1.5}, ${100 / (index + 1.9)}%)` }}>
            <p className="skillTitle">{skill.type}</p>
            <p>{skill.level}</p>
          </li>
          )}
        </ul>
      </div>

            
        )
    }
}

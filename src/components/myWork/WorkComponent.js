import React, { Component } from 'react';
import MyAccordion from "./MyAccordion";
import TodoComponent from "./Todo/TodoComponent";
import NewTodo from "./NewTodo";

import "./work.css";


export default class WorkComponent extends Component {
    render() {
        return (
          <div className="page work">
          <div className="container">
              <div className="row m-0 flex-column">      
                <div className="heading">
                  <h2>My Work</h2>
                </div>
                <h5> Click on the below Accordion to see the sample work </h5>
              </div>
            <MyAccordion />
            <TodoComponent />
            <NewTodo title="ravi" />                       
          </div>
    
        </div>
        )
    }
}

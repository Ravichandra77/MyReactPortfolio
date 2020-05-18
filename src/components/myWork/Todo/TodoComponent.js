import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import SubmitForm from './SubmitForm';

import LS_TODO from "../LS_Todo/LS_Todo";

export default class TodoComponent extends React.Component {
    state = {
        tasks: ['task 1', 'task 2', 'task 3']
      };

      handleDelete = (index) => {
        const newArr = [...this.state.tasks];
        newArr.splice(index, 1);
        this.setState({tasks: newArr});
    }
    handleSubmit = task => {
        this.setState({tasks: [...this.state.tasks, task]});
    }

      render() {
        return(
    <React.Fragment> 
        <div className="row m-0 mt-5">
        <div className="heading">
          <h2>Todo List App </h2>
        </div>
        </div>
         <div className="row">
           <div className='TodoWrapper col-6'>
             <p className="align-self-start">TODO list without Local Storge</p>
            <div className='card frame'>
            <Header numTodos={this.state.tasks.length} />
            <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />                  
            <SubmitForm onFormSubmit={this.handleSubmit}  />
            </div>
          </div>

          <div className='TodoWrapper col-6'>
          <p className="align-self-start">TODO list with Local Storge</p>
            <div className='card frame'>
            <LS_TODO />
            </div>
          </div>
          </div>
          </React.Fragment>
        );
      }
}




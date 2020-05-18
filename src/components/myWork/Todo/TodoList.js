import React from "react";
import Todo from "./Todo";
import FlipMove from "react-flip-move"


  const TodoList = (props) => {
    const todos = props.tasks.map((todo, index) => {
        return (
          <FlipMove duration={300} easing="ease-in-out" id={todo} key={index * Math.random() * 1000}>
              <Todo content={todo} key={todo} id={index} onDelete={props.onDelete} /> 
          </FlipMove>
        )
    })
    return(
      <div className='list-wrapper'> 
        {todos}
      </div>
    );
  }
  export default TodoList;

  // export default class TodoList extends React.Component {
  //   state = {
  //     todos: this.props.tasks
  //   }
  //   render() {
  //   const todo =  this.state.todos.map((todo, index) => {
  //     return <Todo content={todo} key={todo} id={index} onDelete={this.props.onDelete} /> 
  //     })
  //     return (
  //         <div className='list-wrapper'>
  //       {todo}
  //     </div> 
  //     )
  //   }
  // }
  
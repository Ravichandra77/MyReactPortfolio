import React, {useState}from 'react';


// const NewTodo = (props) => {
//     const myList = [
//         {id: 1, value: "Ravi Chandra", done: false},
//         {id: 2, value: "Hari", done: false},
//         {id: 3, value: "Govinda", done: false},
//         {id: 4, value: "Prathi", done: false}
//     ]
//     const [list, setList] = useState([...myList]);
//     const [newList, setNewList] = useState({id: "", value: "", done: false});

//     const onRavi = (e) => {
//         setNewList({[e.target.name]: e.target.value});
//     } 
//     const submitForm = e => {
//         e.preventDefault();
//     }

//     return (
//         <div>
//             <ul className="justify-content-between flex-column list-group">
//             {list.map( v =>  
//             <li key={v.id}
//              className={`flex-fill border-0 ls list-group-item 
//              ${v.done ? "line-through": ""}`}> {v.value} </li>
//             )}
//             </ul>
//             <form className="todoForm" onSubmit={submitForm}>
//                 <div className="input-group">
//                 <input type="text" name="task" className="form-control" placeholder="Enter Item"  onChange={onRavi} />
//                 <div className="input-group-append">
//                 <button className="btn btn-primary" type="submit">Add</button>
//                 </div></div>
//             </form>
//         </div>
//     )
// }


const NewTodo = (props) => {
return (
    <div></div>
)

}


export const Header = (props) => {
    const total = props.numTodos;
      return(
        <div className='card-header'>
          <h3 className='card-header-title header'>
            You have {total === 0 ? "Zero" : total} Todos
          </h3>
        </div>
      )
    }


    

export default NewTodo

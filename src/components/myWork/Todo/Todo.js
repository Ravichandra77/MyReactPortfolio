import React from 'react';
import {ListGroup} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from "@fortawesome/free-regular-svg-icons";


export const MyContext = React.createContext();
export default class Todo extends React.Component {
 
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
        content: this.props.content,
        isClicked: false,
        Editable: false
    }
  }

edit = () => {
  this.setState({Editable: true})
}

save = () => {
  this.setState({
    Editable: false,
    content: this.myRef.current.value,
    isClicked: false
  })
}

cancel = (e) => {
  e.preventDefault();
    this.setState({
      Editable: false,
      content: this.props.content,
      isClicked: false,
      isAnimated: false
    })
  }

  toggleClass = () => {
    this.setState({isClicked: !this.state.isClicked})
  }

  animated = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    transition: "all 500ms ease-in-out",
    transform: "scale(0)",
    opacity: 0
}

render() {
  return(
    <MyContext.Provider value={this.state}>
    <ListGroup className={`justify-content-between flex-row ${this.state.isAnimated ? "animated": ""}`}>
      {this.state.Editable ? 
      <div className="input-group"> 
      <input type="text" className="form-control" placeholder='Enter Item' ref={this.myRef}
             onChange={(e) =>  this.setState({term: e.target.value})} />
      
        <div className="input-group-append">
          <button className="btn btn-secondary" type="button" onClick={this.cancel}>Cancel</button>
          <button className="btn btn-success" type="button" onClick={this.save} >Save</button>
        </div>
    </div>  :
    
      <ListGroup.Item className={`flex-fill border-0 lr ${this.state.isClicked ? "line-through": ""}`}
       onClick={this.toggleClass}>
      
      {this.state.content}
     </ListGroup.Item>
    }
      <button className="EditBtn btns border-0" onClick={this.edit}>
     <span className="text-danger"> <FontAwesomeIcon icon={faEdit} /></span>           
      </button>
      <button className="DelBtn btns border-0" onClick={() => { return (this.setState({isAnimated: true}), this.props.onDelete(this.props.id)) }
    }>
     <span className="text-danger"> <FontAwesomeIcon icon={faTrashAlt} /></span>           
      </button>
  </ListGroup>
  </MyContext.Provider>
  );
}
}
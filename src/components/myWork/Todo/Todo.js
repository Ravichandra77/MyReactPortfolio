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
   //console.log(this.refs.myRef.value)
}


save = () => {
  this.setState({
    Editable: false,
    content: this.refs.myRef.value,
    isClicked: false    
  })
  //console.log(this.refs.myRef.value)
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

render() {
  return(
    <MyContext.Provider value={this.state}>
    <ListGroup className="justify-content-between flex-row">
      {this.state.Editable ? 
      <div className="input-group"> 
      <input type="text" className="form-control border-0" placeholder='Enter Item' ref="myRef"
             onChange={(e) =>  this.setState({term: e.target.value})} />
      
        <div className="input-group-append">
          {/* <button className="btn btn-secondary" type="button" onClick={this.cancel}>Cancel</button> */}
          <button className="btn btn-success" type="button" onClick={this.save} >Save</button>
        </div>
    </div>  :
    
      <ListGroup.Item className={`flex-fill border-0 lr ${this.state.isClicked ? "line-through": ""}`}
       onClick={this.toggleClass}>
      
      {this.state.content}
     </ListGroup.Item>
    }
      <button className="EditBtn btns border-0 body-bg" onClick={this.edit}>
     <span className="text-danger"> <FontAwesomeIcon icon={faEdit} /></span>           
      </button>
      <button className="DelBtn btns border-0 body-bg" onClick={() => { this.props.onDelete(this.props.id) }
    }>
     <span className="text-danger"> <FontAwesomeIcon icon={faTrashAlt} /></span>           
      </button>
  </ListGroup>
  </MyContext.Provider>
  );
}
}
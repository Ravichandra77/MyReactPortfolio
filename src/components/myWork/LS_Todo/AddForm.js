import React, {Component} from 'react';


/* === form input ===== */
export default class AddForm extends Component {
  handleSubmit =(e) => {
    e.preventDefault()
    let val = this.refs.listItem.value
    val && this.props.addItem(val) // only send if value is not empty!
    this.refs.listItem.value = '' // reset input field to blank
  }
  render() {
    return (
      <form className="todoForm mt-5" onSubmit={this.handleSubmit}>
  <div className="input-group">
    <input type="text" className="form-control" placeholder='Enter Item'
       ref="listItem" />
        <div className="input-group-append">
      <button className="btn btn-primary" type="submit">Add</button>
    </div>
  </div>
        
      </form>
    )
  }

}
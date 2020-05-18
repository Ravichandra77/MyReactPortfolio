import React, {Component} from 'react';


/* === form input ===== */
export default class AddForm extends Component {
  render() {
    return (
      <form className="todoForm" onSubmit={this.handleSubmit.bind(this)}>
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
  handleSubmit(e) {
    // when form is submitted, send input value to parent component
    e.preventDefault()
    let val = this.refs.listItem.value
    val && this.props.addItem(val) // only send if value is not empty!
    this.refs.listItem.value = '' // reset input field to blank
  }
}
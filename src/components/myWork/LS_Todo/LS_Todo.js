import React, {Component} from 'react';
import Items  from './Items';
import AddForm  from './AddForm';




/* ===== parent component ===== */
export default class NewTodo extends Component {
  constructor(props) {
    super(props)
    this.state = { items: ["Default 1", "Default 2", "Default 3"] }
  }
  render() {
    // outputting child components while passing state + callback functions

    const total = this.state.items.length;
    return (
      <div>
        <div className="card-header">
          <h3 className="card-header-title header">You have {total === 0 ? "Zero": total} Todos</h3>
          </div>        
        <Items items={this.state.items} removeItem={this.removeItem.bind(this)} />
        <AddForm addItem={this.addItem.bind(this)} />
      </div>
    )
  }
  addItem(item) {
    // getting input value from child component --> adding it to state items array
    this.setState({
      items: this.state.items.concat(item)
    })
  }
  removeItem(value) {
    // filter method --> taking out item that matches value of clicked item
    let filtered = this.state.items.filter((item) =>{
      return item !== value
    })
    // setting the filtered array as new state --> all items minus clicked item
    this.setState({
      items: filtered
    })

  }
  componentWillMount() {
    // load items array from localStorage, set in state
    let itemsList = localStorage.getItem('items')
    if (itemsList) {
      this.setState({
        items: JSON.parse(localStorage.getItem('items'))
      })
    }
  }
  componentDidUpdate() {
    // on each update, sync our state with localStorage
    localStorage.setItem('items', JSON.stringify(this.state.items))
  }
}

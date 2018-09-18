import React, {Component} from 'react';
import AddItem from './AddItem'
import List from './List'

class ListContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      items: [
        {name: "oranges", quantity: 3, inCart: false, id: 1},
        {name: "fancy cheese", quantity: 2, inCart: false, id: 2},
        {name: "milk", quantity: 1, inCart: false, id: 3}
      ]
    }
  }

  idCount = 3

  addNewItem = (item) => {
    this.idCount ++
    item.id = this.idCount
    this.setState({ items: [...this.state.items, item]})
  }

  deleteItem = (id) => {
    this.setState({items:  
      this.state.items.filter(item => item.id !== id)
    })
  }

  render(){
    return (
      <div className="list-container">
        <h1>Grocery List</h1>
        <AddItem addNewItem={this.addNewItem}/>
        <List items={this.state.items} deleteItem={this.deleteItem}/>
      </div>
      )
    }
}

export default ListContainer;


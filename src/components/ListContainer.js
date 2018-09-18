import React, {Component} from 'react';
import AddItem from './AddItem'
import List from './List'

class ListContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      items: [
        {name: "oranges", quantity: 3, inBasket: false, id: 1},
        {name: "fancy cheese", quantity: 2, inBasket: false, id: 2},
        {name: "milk", quantity: 1, inBasket: false, id: 3}
      ],
      basket: []
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

  toggleInBasket = (id) => {
    let newItems = this.state.items.map(item => {
      if(item.id === parseInt(id)){
        item.inBasket = !item.inBasket
      }
      return item
    }) 
    let basketItems = this.state.items.filter(
      item => item.inBasket === true)
    this.setState({ items: newItems, basket: basketItems})
  }

  clearInBasket = () => {
      let nonBasketItems = this.state.items.filter(
      item => item.inBasket === false)
      this.setState({ items: nonBasketItems, showInBasket: false})
  }



  render(){
    return (
      <div className="list-container">
        <h1>Grocery List</h1>
        <AddItem addNewItem={this.addNewItem}/>
        <button className="clear-basket-items" onClick={this.clearInBasket}>
          Clear in-basket items
        </button>
        <List items={this.state.items} deleteItem={this.deleteItem}
          toggleInBasket={this.toggleInBasket}/>
      </div>
      )
    }
}

export default ListContainer;


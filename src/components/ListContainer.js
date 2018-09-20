import React, {Component} from 'react';
import recurringItems from '../itemsHelper'
import List from './List'
import OptionsContainer from './OptionsContainer'

class ListContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      items: [],
      recurringItems: recurringItems
    }
  }

  idCount = recurringItems.length

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
    this.setState({ items: newItems})
  }

  clearInBasket = () => {
      let nonBasketItems = this.state.items.filter(
      item => item.inBasket === false)
      this.setState({ items: nonBasketItems, showInBasket: false})
  }

  addRecurringItems = () => {
    this.setState({items: [...this.state.items, ...this.state.recurringItems]})
  }

  addNewRecurringItem = (item) => {
    this.idCount ++
    item.id = this.idCount
    this.setState({recurringItems: [...this.state.recurringItems, item]})
  }


  render(){
    return (
      <div className="list-container">      
        <List items={this.state.items} addNewItem={this.addNewItem} 
        deleteItem={this.deleteItem} toggleInBasket={this.toggleInBasket}/>
        <OptionsContainer clearInBasket={this.clearInBasket}
        addRecurringItems={this.addRecurringItems} recurringItems={this.state.recurringItems}
        addNewRecurringItem={this.addNewRecurringItem} />
      </div>
      )
    }
}

export default ListContainer;


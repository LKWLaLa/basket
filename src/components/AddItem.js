import React, {Component} from 'react';

class AddItem extends Component {

  constructor(props){
    super(props)
    this.state = {
      item: '',
      qty: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addItemHandler = (e) => {
    e.preventDefault()
    let item = {name: this.state.item, quantity: this.state.qty, inBasket: false}
    this.setState({item: '', qty: ''})
    if(this.props.addNewItem){
      this.props.addNewItem(item)
    } else {this.props.addNewRecurringItem(item)}
  }
  
  render(){
    return (
      <form className="add-item" onSubmit={this.addItemHandler}>
        <input type="text" name="item" placeholder="ex - bananas..." 
          onChange={this.handleChange} value={this.state.item}/>
        <input type="number" name="qty" min="1" max="100" placeholder="qty" 
          onChange={this.handleChange} value={this.state.qty}/> 
        <input type="submit" value="Add Item"/>   
      </form>
    )
  }
}

export default AddItem;
import React, {Component} from 'react';
import RecurringItemsContainer from './RecurringItemsContainer';

class OptionsContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      buttonDisabled: false,
      showRecurring: false
    }

  }

  clearBasketHandler = () => {
    this.props.clearInBasket()
  }

  recurringItemsHandler = () => {
    this.setState({buttonDisabled: true})
    this.props.addRecurringItems()
  }

  showRecurringItems = () => {
    this.setState({showRecurring: true})
  }

  hideRecurringItems = () => {
    this.setState({showRecurring: false})
  }

  render(){
    return (
      <div className="options">
        <h1>Options</h1>
        <button className="clear-basket-items" onClick={this.clearBasketHandler}>
          Clear in-basket items
        </button><br /> 

        <button className="add-recurring-items" onClick={this.recurringItemsHandler}
        disabled={this.state.buttonDisabled}>
         Add my recurring items to list
        </button><br /> 

        <button className="show-recurring-items" onClick={this.showRecurringItems}>
         Show my recurring items
        </button>
        
        {this.state.showRecurring ? 
          <RecurringItemsContainer recurringItems={this.props.recurringItems}
          closeList={this.hideRecurringItems} 
          addNewRecurringItem={this.props.addNewRecurringItem}/> : null}
      </div>
    )
  }
}

export default OptionsContainer;
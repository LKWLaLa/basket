import React from 'react';
import RecurringItem from './RecurringItem';
import AddItem from './AddItem'

const RecurringItemsContainer = (props) => {

  let items = props.recurringItems.map(
    item => <RecurringItem item={item} key={item.id}/>
  )

  let handleClose = () => {
    props.closeList()
  }

  return (
    <div className="recurring-items">
       <h3>Your recurring items:</h3>
       <AddItem addNewRecurringItem={props.addNewRecurringItem}/>
      {items}
      <button className="close" onClick={handleClose}>Close</button>
    </div>
  )
}

export default RecurringItemsContainer;
import React from 'react';

const RecurringItem = (props) => {
  let {name, quantity, id} = props.item


  return (
    <div className="recurring-item">
      <span className="item-name">{name}</span>
      <span className="item-quantity">{quantity}</span>   
    </div>
  )
}

export default RecurringItem;
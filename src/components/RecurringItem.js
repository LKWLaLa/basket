import React from 'react';

const RecurringItem = (props) => {
  let {name, quantity, id} = props.item


  return (
    <div className="recurring-item">
      <div className="item-name">{quantity} {name}</div>
    </div>
  )
}

export default RecurringItem;
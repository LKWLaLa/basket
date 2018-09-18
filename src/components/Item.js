import React from 'react';

const Item = (props) => {
  let {name, quantity, inCart, id} = props.item

  let handleDelete = () => {
    props.deleteItem(id)
  }
  return (
    <div className="item">
      <input type="checkbox" id={id} /> 
      <label htmlFor={id}>
        <span className="item-name">{name}</span>
        <span className="item-quantity">{quantity}</span>
      </label> 
      <button className="delete" onClick={handleDelete}>X</button>    
    </div>
  )
}

export default Item;
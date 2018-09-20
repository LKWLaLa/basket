import React from 'react';

const Item = (props) => {
  let {name, quantity, id} = props.item

  let handleDelete = () => {
    props.deleteItem(id)
  }

  let handleBasketChange = (e) => {
    props.toggleInBasket(e.target.id)
  }

  return (
    <div className="item">
      <input type="checkbox" id={id} onChange={handleBasketChange}/> 
      <label htmlFor={id}>
        <span className="item-name">{quantity} {name}</span>
      </label> 
      <button className="delete" onClick={handleDelete}>X</button>    
    </div>
  )
}

export default Item;
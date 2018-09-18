import React from 'react';
import Item from './Item';

const List = (props) => {
  let {items} = props

  let listItems = items.map(
    item => <Item item={item} key={item.id} deleteItem={props.deleteItem}
    toggleInBasket={props.toggleInBasket}/>
  )

  return (
    <div className="list">
      {listItems}
    </div>
  )
}

export default List;
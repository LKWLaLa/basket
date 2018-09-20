import React from 'react';
import Item from './Item';
import AddItem from './AddItem'

const List = (props) => {
  let {items} = props

  let listItems = items.map(
    item => <Item item={item} key={item.id} deleteItem={props.deleteItem}
    toggleInBasket={props.toggleInBasket}/>
  )

  return (
    <div className="list">
       <h1>Grocery List</h1>
       <AddItem className='add-list-item' addNewItem={props.addNewItem}/>
      {listItems}
    </div>
  )
}

export default List;
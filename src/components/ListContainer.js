import React, {Component} from 'react';
import List from './List'

class ListContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      items: [
        {name: "oranges", quantity: 3, inCart: false, id: 1},
        {name: "fancy cheese", quantity: 2, inCart: false, id: 2},
        {name: "milk", quantity: 1, inCart: false, id: 3}
      ]
    }
  }

  render(){
    return (
      <div className="list-container">
        <List items={this.state.items}/>
      </div>
      )
    }
}

export default ListContainer;


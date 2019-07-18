import React from 'react';
import './Navigation.css';
import {navigation} from './globalVars.js';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 3,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(index, e) {
    this.setState(state => ({
      active: index
    }));
    var event = new CustomEvent(
      "navigation", 
      {
        detail: {
          message: navigation[index],
        },
        bubbles: true,
        cancelable: true
      }
    );
    document.dispatchEvent(event);
  }
  render() {
    return  (
      <div className="Navigation">
        {navigation.map((item, index)=>{
            if(this.state.active === index)
                return <div onClick={(e) => this.handleClick(index, e)} className="Item ItemActive">{item}</div>;
            else
                return <div onClick={(e) => this.handleClick(index, e)} className="Item">{item}</div>;
        })}
      </div>
    );
  }
}

export default Navigation;
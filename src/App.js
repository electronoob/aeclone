import React from 'react';
import './App.css';
import Header from './Header';
import Technologies from './Technologies';
import Structures from './Structures';
import Navigation from './Navigation';
import MyBaseList from './MyBaseList';
import Empire from './Empire';
import {technology, structures, gameState} from './globalVars.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
      section: null
    };
    document.addEventListener('navigation', (e)=> {
      this.setState((state, props) => {
        return {page: e.detail.message};
      });
    }, false);
  }
  render() {
    return  (
      <div className="App">
        <Header />
        <Navigation/>
        {
          {
            technologies: <Technologies technologies={technology}/>,
            structures:   <Structures structures={structures}/>,
            Bases: <MyBaseList />,
            Empire: <Empire />
          }[this.state.page]
        }
      </div>
    );
  }
}

export default App;
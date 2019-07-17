import React from 'react';
import './App.css';
import Header from './Header';
import Technologies from './Technologies';
import Structures from './Structures';
import Navigation from './Navigation';
import MyBaseList from './MyBaseList';
import {technology, structures, gameState} from './globalVars.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
      section: null
    };
  }
  render() {
    return  (
      <div className="App">
        <Header />
        <Navigation/>
        {
          {
            technologies: <Technologies technologies={technology}/>,
            structures:   <Structures structures={structures}/>
          }[this.state.section]
        }
        <MyBaseList />
      </div>
    );
  }
}

export default App;
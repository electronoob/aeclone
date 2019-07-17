import React from 'react';
import './MyBaseList.css';
import {gameState} from './globalVars.js';

class MyBaseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return  (
      <div className="MyBaseList">
        <p>List of my Bases</p>
        <table>
            <thead>
                <tr>
                    <th>
                        Base
                    </th>
                    <th>
                        Location
                    </th>
                    <th>
                        Occupier
                    </th>
                    <th>
                        Economy
                    </th>
                </tr>
            </thead>
            <tbody>
            {
                gameState.players[gameState.player.id].bases.map(
                    (item, index) => (
                        <tr>
                            <td>{gameState.bases[item].name}</td>
                            <td>{item}</td>
                            <td>{gameState.bases[item].occ}</td>
                            <td>{gameState.bases[item].econ.econ} / {gameState.bases[item].econ.real}</td>
                        </tr>
                    )
                )
            }
            </tbody>
        </table>
      </div>
    );
  }
}

export default MyBaseList;
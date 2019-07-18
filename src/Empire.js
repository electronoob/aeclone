import React from 'react';
import './Empire.css';
import {gameState} from './globalVars.js';

class Empire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return  (
      <div className="Empire">
        <p>List of my Empire</p>
        <table>
            <thead>
                <tr>
                    <th>
                        Base
                    </th>
                    <th>
                        Construction
                    </th>
                    <th>
                        Production
                    </th>
                    <th>
                        Research
                    </th>
                </tr>
            </thead>
            <tbody>
            {
                gameState.players[gameState.player.id].bases.map(
                    (item, index) => (
                        <tr>
                            <td>{gameState.bases[item].name}</td>
                            <td>{gameState.players[gameState.player.id].queues.construction[0]}</td>
                            <td>{gameState.players[gameState.player.id].queues.production[0]}</td>
                            <td>{gameState.players[gameState.player.id].queues.research[0]}</td>
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

export default Empire;
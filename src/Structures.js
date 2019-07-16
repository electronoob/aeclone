import React from 'react';
import './Structures.css';
import Structlist from './Structlist';

function Structures(props) {
  return (
    <div className="Structures">
        <p>List of available structures</p>
        <table>
            <thead>
                <tr>
                    <th>
                        Structure
                    </th>
                    <th>
                        Credits
                    </th>
                    <th>
                        Energy
                    </th>
                    <th>
                        Requires
                    </th>
                </tr>
            </thead>
            <tbody>
            {props.structures.map((item, index) => (
                <Structlist key={index} item={item}/>
            ))}
            </tbody>
        </table>
    </div>
  );
}

export default Structures;

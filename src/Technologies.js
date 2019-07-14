import React from 'react';
import './Technologies.css';
import Techlist from './Techlist';

function Technologies(props) {
  return (
    <div className="Technologies">
        <p>List of available technologies</p>
        <table>
            <thead>
                <tr>
                    <th>
                        Technology
                    </th>
                    <th>
                        Credits
                    </th>
                    <th>
                        Labs
                    </th>
                    <th>
                        Requires
                    </th>
                </tr>
            </thead>
            <tbody>
            {props.technologies.map((item, index) => (
                <Techlist key={index} item={item}/>
            ))}
            </tbody>
        </table>
    </div>
  );
}

export default Technologies;

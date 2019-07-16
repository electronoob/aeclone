import React from 'react';

function Structlist(props) {
  return (
        <tr>
            <td>{props.item.Name}</td>
            <td>{props.item.Credits}</td>
            <td>{props.item.LabsLevel}</td>
            <td>{props.item.Requires}</td>            
        </tr>
  );
}

export default Structlist;

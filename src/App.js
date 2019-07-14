import React from 'react';
import './App.css';
import Header from './Header';
import Technologies from './Technologies';


var technology = [
  {
    "Name": "Energy",
    "Credits": "2",
    "LabsLevel": "1",
    "Requires": ""
  },
  {
    "Name": "Computer",
    "Credits": "2",
    "LabsLevel": "1",
    "Requires": ""
  },
  {
    "Name": "Armour",
    "Credits": "4",
    "LabsLevel": "2",
    "Requires": ""
  },
  {
    "Name": "Laser",
    "Credits": "4",
    "LabsLevel": "2",
    "Requires": "Energy 2"
  },
  {
    "Name": "Missiles",
    "Credits": "8",
    "LabsLevel": "4",
    "Requires": "Computer 4"
  },
  {
    "Name": "Stellar Drive",
    "Credits": "16",
    "LabsLevel": "5",
    "Requires": "Energy 6"
  },
  {
    "Name": "Plasma",
    "Credits": "32",
    "LabsLevel": "6",
    "Requires": "Energy 6 + Laser 4"
  },
  {
    "Name": "Warp Drive",
    "Credits": "64",
    "LabsLevel": "8",
    "Requires": "Energy 8 + Stellar Drive 4"
  },
  {
    "Name": "Shielding",
    "Credits": "128",
    "LabsLevel": "10",
    "Requires": "Energy 10"
  },
  {
    "Name": "Ion",
    "Credits": "256",
    "LabsLevel": "12",
    "Requires": "Energy 12 + Laser 10"
  },
  {
    "Name": "Photon",
    "Credits": "1,024",
    "LabsLevel": "16",
    "Requires": "Energy 16 + Plasma 8"
  },
  {
    "Name": "Artificial Intelligence",
    "Credits": "2,048",
    "LabsLevel": "18",
    "Requires": "Computer 20"
  },
  {
    "Name": "Disruptor",
    "Credits": "4,096",
    "LabsLevel": "20",
    "Requires": "Energy 20 + Laser 18"
  },
  {
    "Name": "Cybernetics",
    "Credits": "8,192",
    "LabsLevel": "22",
    "Requires": "Artificial Intelligence 6"
  },
  {
    "Name": "Tachyon Communications",
    "Credits": "32,768",
    "LabsLevel": "24",
    "Requires": "Energy 24 + Computer 24"
  },
  {
    "Name": "Anti-Gravity",
    "Credits": "100,000",
    "LabsLevel": "26",
    "Requires": "Energy 26 + Computer 26"
  },
];


function App() {
  return (
    <div className="App">
      <Header />
      <Technologies technologies={technology}/>
    </div>
  );
}

export default App;
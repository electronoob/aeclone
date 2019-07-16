
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
  
  
  var structures = [
    {
      "Name": "Urban Structures",
      "Credits": "1",
      "Energy": "",
      "Advanced": "",
      "Requires": ""
    },
    {
      "Name": "Solar Plants",
      "Credits": "1",
      "Energy": "",
      "Advanced": "",
      "Requires": ""
    },
    {
      "Name": "Gas Plants",
      "Credits": "1",
      "Energy": "",
      "Advanced": "",
      "Requires": ""
    },
    {
      "Name": "Fusion Plants",
      "Credits": "20",
      "Energy": "4",
      "Advanced": "",
      "Requires": "Energy 6"
    },
    {
      "Name": "Antimatter Plants",
      "Credits": "2,000",
      "Energy": "10",
      "Advanced": "x",
      "Requires": "Energy 20"
    },
    {
      "Name": "Orbital Plants",
      "Credits": "40,000",
      "Energy": "12",
      "Advanced": "x",
      "Requires": "Energy 25"
    },
    {
      "Name": "Research Labs",
      "Credits": "2",
      "Energy": "-1",
      "Advanced": "",
      "Requires": ""
    },
    {
      "Name": "Metal Refineries",
      "Credits": "1",
      "Energy": "-1",
      "Advanced": "",
      "Requires": ""
    },
    {
      "Name": "Crystal Mines",
      "Credits": "2",
      "Energy": "-1",
      "Advanced": "",
      "Requires": ""
    },
    {
      "Name": "Robotic Factories",
      "Credits": "5",
      "Energy": "-1",
      "Advanced": "",
      "Requires": "Computer 2"
    },
    {
      "Name": "Shipyards",
      "Credits": "5",
      "Energy": "-1",
      "Advanced": "",
      "Requires": ""
    },
    {
      "Name": "Orbital Shipyards",
      "Credits": "10,000",
      "Energy": "-12",
      "Advanced": "",
      "Requires": "Cybernetics 2"
    },
    {
      "Name": "Spaceports",
      "Credits": "5",
      "Energy": "-1",
      "Advanced": "",
      "Requires": ""
    },
    {
      "Name": "Command Centers",
      "Credits": "20",
      "Energy": "-1",
      "Advanced": "",
      "Requires": "Computer 6"
    },
    {
      "Name": "Nanite Factories",
      "Credits": "80",
      "Energy": "-2",
      "Advanced": "x",
      "Requires": "Computer 10 + Laser 8"
    },
    {
      "Name": "Android Factories",
      "Credits": "1,000",
      "Energy": "-4",
      "Advanced": "x",
      "Requires": "Artificial Intelligence 4"
    },
    {
      "Name": "Economic Centers",
      "Credits": "80",
      "Energy": "-2",
      "Advanced": "x",
      "Requires": "Computer 10"
    },
    {
      "Name": "Terraform",
      "Credits": "80",
      "Energy": "",
      "Advanced": "x",
      "Requires": "Computer 10 + Energy 10"
    },
    {
      "Name": "Multi-Level Platforms",
      "Credits": "10,000",
      "Energy": "",
      "Advanced": "x",
      "Requires": "Armour 22"
    },
    {
      "Name": "Orbital Base",
      "Credits": "2,000",
      "Energy": "",
      "Advanced": "x",
      "Requires": "Computer 20"
    },
    {
      "Name": "Jump Gate",
      "Credits": "5,000",
      "Energy": "-8",
      "Advanced": "",
      "Requires": "Warp Drive 12 + Energy 20"
    },
    {
      "Name": "Biosphere Modification",
      "Credits": "20,000",
      "Energy": "-24",
      "Advanced": "",
      "Requires": "Computer 24 + Energy 24"
    },
    {
      "Name": "Capital",
      "Credits": "15,000",
      "Energy": "-12",
      "Advanced": "",
      "Requires": "Tachyon Communications 1"
    },
  ];
  
  var navigation = ["Bases", "Map", "Fleets", "Empire", "Commanders", "Guild", "Notes", "Bookmarks","Notifications"]
  
  export {technology, structures, navigation};
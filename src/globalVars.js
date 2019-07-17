var astros = [
  {
    "Name": "Arid",
    "Metal": "2",
    "Gas": "2",
    "Crystals": "0",
    "Fertility": "5",
    "Area Planet": "95",
    "Area Moon": "83"
  },
  {
    "Name": "Asteroid",
    "Metal": "3",
    "Gas": "1",
    "Crystals": "2",
    "Fertility": "4",
    "Area Planet": "-",
    "Area Moon": "(65)"
  },
  {
    "Name": "Craters",
    "Metal": "3",
    "Gas": "1",
    "Crystals": "1",
    "Fertility": "4",
    "Area Planet": "85",
    "Area Moon": "75"
  },
  {
    "Name": "Crystalline",
    "Metal": "2",
    "Gas": "1",
    "Crystals": "3",
    "Fertility": "4",
    "Area Planet": "80",
    "Area Moon": "71"
  },
  {
    "Name": "Earthly",
    "Metal": "2",
    "Gas": "2",
    "Crystals": "0",
    "Fertility": "6",
    "Area Planet": "85",
    "Area Moon": "75"
  },
  {
    "Name": "Gaia",
    "Metal": "2",
    "Gas": "2",
    "Crystals": "0",
    "Fertility": "6",
    "Area Planet": "90",
    "Area Moon": "79"
  },
  {
    "Name": "Glacial",
    "Metal": "1",
    "Gas": "2",
    "Crystals": "0",
    "Fertility": "5",
    "Area Planet": "95",
    "Area Moon": "83"
  },
  {
    "Name": "Magma",
    "Metal": "2",
    "Gas": "4",
    "Crystals": "0",
    "Fertility": "5",
    "Area Planet": "80",
    "Area Moon": "71"
  },
  {
    "Name": "Metallic",
    "Metal": "3",
    "Gas": "2",
    "Crystals": "1",
    "Fertility": "4",
    "Area Planet": "85",
    "Area Moon": "75"
  },
  {
    "Name": "Oceanic",
    "Metal": "1",
    "Gas": "2",
    "Crystals": "0",
    "Fertility": "6",
    "Area Planet": "80",
    "Area Moon": "71"
  },
  {
    "Name": "Radioactive",
    "Metal": "2",
    "Gas": "3",
    "Crystals": "0",
    "Fertility": "4",
    "Area Planet": "90",
    "Area Moon": "79"
  },
  {
    "Name": "Rocky",
    "Metal": "3",
    "Gas": "2",
    "Crystals": "0",
    "Fertility": "5",
    "Area Planet": "85",
    "Area Moon": "75"
  },
  {
    "Name": "Toxic",
    "Metal": "2",
    "Gas": "4",
    "Crystals": "0",
    "Fertility": "4",
    "Area Planet": "90",
    "Area Moon": "79"
  },
  {
    "Name": "Tundra",
    "Metal": "2",
    "Gas": "2",
    "Crystals": "0",
    "Fertility": "5",
    "Area Planet": "95",
    "Area Moon": "83"
  },
  {
    "Name": "Volcanic",
    "Metal": "2",
    "Gas": "4",
    "Crystals": "0",
    "Fertility": "5",
    "Area Planet": "80",
    "Area Moon": "71"
  }
];

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
  
  var navigation = ["Bases", "Map", "Fleets", "Empire", "Commanders", "Guild", "Notes", "Bookmarks","Notifications"];

  var gameState = {
    player: {
      id: 0
    },
    astros: {
      "U02:86:03:11": {
        type:     0,
        terrain:  0,
        area:     0,
        solar:    0,
        fertility:0,
        crystal:  0,
        metal:    0,
        gas:      0
      }
    },
    bases: {
      "U02:86:03:11": {
        owner: 0,
        name: "Linux",
        occ: 0,
        econ: {
          econ: 0,
          real: 0
        },
      }
    },
    players: {
      0: {
        id: 0,
        name: "",
        guild: "",
        level: "",
        avatar: "",
        bases: ["U02:86:03:11"],
        fleets: [],
        tech: [],
        commanders: [],
        notes: [],
        bookmarks: [],
        notifications: [],
        trades: [],
        units: []
      }
    },
  }

  export {technology, structures, navigation, astros, gameState};
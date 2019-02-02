import React from 'react';

const BARRELS = ["2 2", "3 2", "3 2 2", "3 2 2 2", "3 3 2 2", "4 3 2 2", "4 3 2 2 2"]

class HouseDisplay extends React.Component {

  state = {
    houses: [{
      id: 0,
      name: 'stark',
      img: 'stark.png',
      barrels: 0,
      castles: 0
    },
    {
      id: 1,
      name: 'lannister',
      img: 'lannister.png',
      barrels: 0,
      castles: 0
    },
    {
      id: 2,
      name: 'greyjoy',
      img: 'greyjoy.png',
      barrels: 0,
      castles: 0
    },
    {
      id: 3,
      name: 'baratheon',
      img: 'baratheon.png',
      barrels: 0,
      castles: 0
    },
    {
      id: 4,
      name: 'arryn',
      img: 'arryn.png',
      barrels: 0,
      castles: 0
    },
    {
      id: 5,
      name: 'martell',
      img: 'martell.png',
      barrels: 0,
      castles: 0
    },
    {
      id: 6,
      name: 'tyrell',
      img: 'tyrell.png',
      barrels: 0,
      castles: 0
    },
    {
      id: 7,
      name: 'targaryen',
      img: 'targaryen.png',
      barrels: 0,
      castles: 0
    }
    ]
  }

  addBarrel = (id) => {
    const newState = [...this.state.houses]
    let newBarrelCount = this.state.houses[id].barrels
    newBarrelCount++
    if (newBarrelCount > 6) {
      newBarrelCount = 6
    }
    newState[id].barrels = newBarrelCount
    this.setState({houses: newState});
  }

  removeBarrel = (id) => {
    const newState = [...this.state.houses]
    let newBarrelCount = this.state.houses[id].barrels
    newBarrelCount--
    if (newBarrelCount <= 0) {
      newBarrelCount = 0
    }
    newState[id].barrels = newBarrelCount
    this.setState({houses: newState});
  }

  addCastle = (id) => {
    const newState = [...this.state.houses]
    let newCastleCount = this.state.houses[id].castles
    newCastleCount++
    if (newCastleCount > 7) {
      newCastleCount = 7
    }
    newState[id].castles = newCastleCount
    this.setState({houses: newState});
  }

  removeCastle = (id) => {
    const newState = [...this.state.houses]
    let newCastleCount = this.state.houses[id].castles
    newCastleCount--
    if (newCastleCount <= 0) {
      newCastleCount = 0
    }
    newState[id].castles = newCastleCount
    this.setState({houses: newState});
  }

  render() {
    return this.state.houses.map((house) => {

  console.log(house)
  return (
    <div class={house.name}>
      <div class="level is-mobile">
        <div class="level-item level-left">
          <img class="image sigil" height="48px" width="48px" src={house.img} alt={house.name}/>
          <img src="barrel.png" alt="barrel" class="image is-48x48 army"/>
          <i class="fas fa-minus padded" onClick={() => this.removeBarrel(house.id)}></i>
          <h1 class="title count">{house.barrels}</h1>
          <i class="fas fa-plus padded" onClick={() => this.addBarrel(house.id)}></i>
        </div>
        
        <div class="level-item">
            <img src="helmet.png" alt="helmet" class="image is-48x48" />
            <h1 class="title army">{BARRELS[house.barrels]}</h1>
        </div>

        <div class="level-item level-right padded-right">
          <img src="castle.png" alt="castle" class="image is-48x48"/>
          <i class="fas fa-minus padded" onClick={() => this.removeCastle(house.id)}></i>
          <h1 class="title count">{house.castles}</h1>
          <i class="fas fa-plus padded" onClick={() => this.addCastle(house.id)}></i>
        </div>
      </div>
    </div>
)})
}
}

export default HouseDisplay;
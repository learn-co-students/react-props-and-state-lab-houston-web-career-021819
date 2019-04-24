import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (value) => {
    this.setState({
      filters: {
        type: value
      }
    })
  }

  onFindPetsClick = () => {
    const fetchURL = `/api/pets${this.state.filters.type === 'all' ? '' : `?type=${this.state.filters.type}`}`
    
    fetch(fetchURL)
      .then(res => res.json())
      .then(petData => this.setState({ pets: petData}))
  }

  onAdoptPet = (id) => {
    this.setState({ pets: this.state.pets.map( pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    })})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

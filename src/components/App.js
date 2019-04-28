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

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType= {(event) => this.onChangeType(event)}  fetch= { () => this.fetchPetsData()}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets= {this.state.pets} onAdoptPet={(id) => this.adoptionStatus(id)} isAdopted={this.state.pets.isAdopted}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  onChangeType(event){
    this.setState({
      pets: [],
      filters: {
        type: event.target.value
      }
    })
  }

  fetchPetsData = () => {
    let petsUrl = "/api/pets"

    if (this.state.filters.type === 'all') {
      fetch(petsUrl)
      .then( response => response.json())
      .then( pets => this.setState({
        ...this.state,
        pets: pets
      }))
    } else {
      fetch(`${petsUrl}?type=${this.state.filters.type}`)
      .then( response => response.json())
      .then( pets => this.setState({
        ...this.state,
        pets: pets
      }))
    }

  }

  adoptionStatus = (id) => {
    this.setState({
    ...this.state, 
      pets: this.state.pets.map(pet => {
        if( pet.id === id ){
          pet.isAdopted = !pet.isAdopted
          return pet
        } else {
          return pet
        }
      })
    })
  }


}

export default App

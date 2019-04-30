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

  onChangeType(event){
    this.setState({
      ...this.state,
      filters:{
        type: event.target.value
      }
    })
  }

  onFindPetsClick=()=> {
    if(this.state.filters.type !== "all"){
    fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json())
      .then(petData => this.setState({
        ...this.state,
        pets: petData
      }))
    } else if (this.state.filters.type === 'all') {
    fetch('/api/pets')
      .then(res => res.json())
      .then(petData => this.setState({
        ...this.state,
        pets: petData
      }))
    }
  }

  //need to map as only changes 1 pet's property
  onAdoptPet=(id)=> {
      this.setState({
        ...this.state,
        pets: this.state.pets.map(pet => {
          if (pet.id === id){
            pet.isAdopted = !pet.isAdopted
            return pet //set the pets to pet
          } else{
            return pet //set pets to pet 
          }
        })
      })
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
              < Filters 
              onChangeType = {event => this.onChangeType(event)}
              onFindPetsClick = {event => this.onFindPetsClick(event)}
              / >
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets = {this.state.pets}
              onAdoptPet = {(id) => this.onAdoptPet(id)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

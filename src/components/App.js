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

  changeType(event){
    console.log(event)
    this.setState({
      pets: [],
      filters: {
        type: event.target.value
      }
    })
  }

  findPet(type){
    if(this.state.filters.type === 'all'){
      fetch('/api/pets')
        .then((res) => {
          return res.json()
        })
        .then((petData) => {
          this.setState({
            ...this.state,
            pets: petData
          })
          return petData

        })
    }
    else{
      fetch(`/api/pets?type=${type}`)
      .then((res) => {
        return res.json()
      })
      .then((petData) => {
        console.log(petData)
        this.setState({
          ...this.state,
          pets: petData
        })
        return petData
      })
    }
  }

  adoptPet = (id) => {
    this.setState({
      ...this.state,
      pets: this.state.pets.map(pet => {
      if(pet.id == id){
        pet.isAdopted = !pet.isAdopted
        return pet
      }
      else{
        return pet
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
              <Filters  onFindPetsClick= {() => this.findPet(this.state.filters.type)} onChangeType= {(event) => this.changeType(event)} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets= {this.state.pets} onAdoptPet={(id) => this.adoptPet(id)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

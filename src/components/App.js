import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'
import Pet from './Pet'

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


  changePetType =(value)=>{
    this.setState({
      filters:{
      ...this.state.filters, 
      type:value
      }   
    })
    //console.log(value)//these two are different. If we put it in the render, these two will match, because we run setState first 
    //console.log(this.state.filters.type) //this is one step behind the type everytime we change it
  }



  fetchPets = () => {
   // decide URL
   const URL = this.state.filters.type == "all" ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
   //console.log(URL)
   fetch(URL)
   .then((response)=>{
     return response.json()
   })
   .then((petsData)=>{
     //console.log(petsData)
     this.setState({pets:petsData})
     //console.log(this.state.pets) //display pet type
   })
  } 

  //need to pass id. Reassign state for the dragons
  adoptBtn = (id) =>{
     console.log(id)
    this.setState({
      pets: this.state.pets.map(pet=>{ 
        //if(pet.id === id){console.log(pet.isAdopted)}
        return pet.id === id? {
          ...pet,
          isAdopted: true
        } : pet
      })
    })
   // console.log(this.props)
  }


  render() {
    //we can run functions here, but if we setState, it will be infinite loop
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType = {this.changePetType} onFindPetsClick = {this.fetchPets}/>  
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} onAdoptPet = {this.adoptBtn}/> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App



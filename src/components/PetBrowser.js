import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


  constructor(props) {
    super(props)

    this.onAdoptPet = this.props.onAdoptPet

  }


  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet => <Pet {...pet} onAdoptPet={this.onAdoptPet}/>)}
      </div>
    )
  }
}

export default PetBrowser

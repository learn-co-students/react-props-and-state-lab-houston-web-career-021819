import React from 'react'

class Pet extends React.Component {

  state = {
    adopted: this.props.pet.isAdopted
  }

  constructor(props) {
    super(props)
    this.id = this.props.pet.id
    this.name = this.props.pet.name
    this.type = this.props.pet.type
    this.age = this.props.pet.age
    this.weight = this.props.pet.weight
    this.gender = this.props.pet.gender
    // this.isAdopted = this.props.pet.isAdopted

    this.onAdoptPet = this.props.onAdoptPet
  } //is this necessary? How do we get around this.props

  // adoptedCheck = () => {
  //   return (
  //     !this.isAdopted
  //     ? <button className="ui primary button" onClick={()=>{this.onAdoptPet(this.id)}}>Adopt pet</button>
  //     : <button className="ui disabled button">Already adopted</button>
  //   )
  // }
  //

  whenAdopted = () => {
    this.setState({adopted: true})
    this.onAdoptPet(this.id)
  } // this feels weird, is there a better way?


  render() {
    // console.log(this.props.isAdopted)
    // console.log(this.isAdopted) why are these different?
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.gender === "male" ? '♂' : '♀'}
            {this.name}
          </a>
          <div className="meta">
            <span className="date">{this.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.age}</p>
            <p>Weight: {this.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!this.state.adopted ? <button className="ui primary button" onClick={this.whenAdopted}>Adopt pet</button> : <button className="ui disabled button">Already adopted</button> }
        </div>
      </div>
    )
  }
}

export default Pet

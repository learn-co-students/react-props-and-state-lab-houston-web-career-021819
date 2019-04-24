import React from 'react'

class Pet extends React.Component {

  state = {
    adopted: false
  }

  constructor(props) {
    super(props)
    // this.id = this.props.id
    // this.name = this.props.name
    // this.type = this.props.type
    // this.age = this.props.age
    // this.weight = this.props.weight
    // this.gender = this.props.gender
    // this.isAdopted = this.props.isAdopted

    this.onAdoptPet = this.props.onAdoptPet
  } //is this necessary?

  // adoptedCheck = () => {
  //   return (
  //     !this.isAdopted
  //     ? <button className="ui primary button" onClick={()=>{this.onAdoptPet(this.id)}}>Adopt pet</button>
  //     : <button className="ui disabled button">Already adopted</button>
  //   )
  // }
  //
  render() {
    // console.log(this.props.isAdopted)
    // console.log(this.isAdopted) why are these different?
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.gender === "male" ? '♂' : '♀'}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!this.props.isAdopted ? <button className="ui primary button" onClick={()=>{this.onAdoptPet(this.props.id)}}>Adopt pet</button> : <button className="ui disabled button">Already adopted</button> }
        </div>
      </div>
    )
  }
}

export default Pet

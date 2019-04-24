import React from 'react'

class Filters extends React.Component {


//grabValue the filter option value
grabValue = (e) =>{
  let value = e.target.value
  this.props.onChangeType(value) //trigger the function in App <Filter>
}


triggerFetchPets = () =>{
  //console.log('you reached me')
  this.props.onFindPetsClick()
}
  
  render() { 
    //console.log('you reached me')
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange = {this.grabValue}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick = {this.triggerFetchPets}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters

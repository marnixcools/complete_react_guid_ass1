import React, { Component  } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput';

class  App extends Component {
  state = {
    name : "Marnix"
  }

  setNameHandler = (prename, lastname) => {
    this.setState({
      //name : prename + " " + lastname
      name : `${prename}  ${lastname}`
    })
  }
  changeNameHandler = (event) => {
    this.setState({
      name : event.target.value
    })
  }
render(){
    return(
      <div className="App">
        <p>Dit is een test</p>
        <UserInput 
          nameChange={this.changeNameHandler}
          locName={this.state.name}>           
        </UserInput>
        <button onClick={this.setNameHandler.bind(this, "Bart" , "Simson")} >Change name</button>
        <div >        
          <UserOutput  name={this.state.name}/>
          <UserOutput name="Nathan"/>
        </div>

      </div>
    )
  }
}
export default App;

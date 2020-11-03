import React, { Component  } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput';

class  App extends Component {
  state = {
    name : "Marnix"
  }

  setNameHandler = () => {
    this.setState({
      name : "Marnix cools"
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
        <button onClick={this.setNameHandler} >Change name</button>
        <UserOutput name={this.state.name}/>
        <UserOutput name="Nathan"/>
      </div>
    )
  }
}
export default App;

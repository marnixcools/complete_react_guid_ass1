import React from 'react';
import './UserInput.css'
const style ={
    backgroundColor : 'red',
    textAlign : 'center'
}
const userInput = (props) => {
    return <div className="userInput">
        <input 
            style={style}                       
            onChange= {props.nameChange}
            value= {props.locName}
        ></input>
        
    </div>;
}

export default userInput;
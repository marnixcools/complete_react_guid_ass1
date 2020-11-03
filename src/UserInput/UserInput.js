import React from 'react';
import './UserInput.css'
const style ={
    backgroundColor : 'red',
    textAlign : 'center',
    padding: '5px'
}
const userInput = (props) => {
    return <div className="UserInput">
        <input 
            style={style}                       
            onChange= {props.nameChange}
            value= {props.locName}
        ></input>
        
    </div>;
}

export default userInput;
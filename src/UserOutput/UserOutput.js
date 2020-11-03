import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return <div className="UserOutput">            
                Username : {props.name}
        </div>;
}

export default userOutput;
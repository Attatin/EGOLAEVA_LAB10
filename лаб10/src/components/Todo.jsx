import React from 'react';
function ToDo(props) {
    return (
        <div>
            <div>
                
                <h3>{props.title}</h3>
                <img src={props.img}/>
                <p>{props.text}!!!</p>
            </div>            
        </div>
        
    )
}

export default ToDo;
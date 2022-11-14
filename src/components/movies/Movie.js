import React from "react";

export const Movie = ({ photo }) => {

    return (
        <div 
          style={{
            margin: '5px', 
            color: 'crimson', 
            width: '200px', 
            border: 'green 2px solid',
            padding: '5px',
            backgroundColor: 'whitesmoke'
        }}>
            <h3>{photo?.title}</h3>
        </div>
    )
}
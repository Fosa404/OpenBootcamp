import React, { useState } from 'react';

const Square = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const changeColor = () => {
        
        setRed(Math.floor((Math.random() * 255)))
        setGreen(Math.floor((Math.random() * 255)))
        setBlue(Math.floor((Math.random() * 255)))
        console.log(Math.floor((Math.random() * 255)))
    }

    

    const restart = () => {
        setRed(0);
        setGreen(0);
        setBlue(0);
    }

   

    return (
        <div  onDoubleClick={restart}
              onMouseOver={changeColor}
              onMouseLeave={restart}
              style={{
                  height: '255px',
                  width: '255px',
                  backgroundColor: `rgb(${red},${green},${blue})`
                }}>
            
        </div>
    );
}

export default Square;

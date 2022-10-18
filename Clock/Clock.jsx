import React, {useState, useEffect} from 'react'

export const Clock = () => {

    const myState = {
        
         fecha: new Date(),
         edad: 0,
         nombre: 'Giuliano',
         apellidos: 'Fossatti'
    };

    const tick = () => {
        SetState(() => {
           let edad = state.edad +1;
           return {
              ...state,
              fecha: new Date(),
              edad
           }
        });
    };

    const [state, SetState] = useState(myState)

    useEffect(() => {
      
        const timerID = setInterval (
            () => tick(), 1000
         );
    
      return () => {
        
        clearInterval (timerID);

      }
    },[])

    
    

  return (
    <div>
        <h2>
         Hora Actual:
         {state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{state.nombre} {state.apellidos}</h3>
         <h1>Edad: {state.edad}</h1>
    </div>
  )

  
}
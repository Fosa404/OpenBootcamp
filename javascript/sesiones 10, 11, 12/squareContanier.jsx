import React from 'react';
import Square from './pure/square';
import 'bootstrap/dist/css/bootstrap.css'

const SquareContanier = () => {

   


    return (
        <div className='container d-flex align-items-center justify-content-center'
             style={{height: '100vh'}}>
            <Square />
        </div>
    );
}

export default SquareContanier;

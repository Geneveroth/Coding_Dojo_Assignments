import React from 'react';

function Number( {id} ){
    const newInt= parseInt(id)
    return(
        isNaN(+newInt)?
        <p>The word is {id}</p>
        :<p> The number is {id}</p>
    )
}

export default Number;
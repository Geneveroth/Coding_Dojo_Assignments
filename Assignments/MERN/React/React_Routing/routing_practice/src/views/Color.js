import React from 'react'
function Color ({word, text, back}) {
    console.log(text)
    return(
        <p style={{color:text, backgroundColor:back}}>{word}</p>
        
    )
}

export default Color
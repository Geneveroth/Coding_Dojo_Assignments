import React from 'react'
import axios from 'axios'

export default function handleDelete({id, success}) {
    const deleteProduct=e=>{
    axios.delete('http://localhost:8000/api/product/' +id)
      .then(res =>{ success();
        })
    }
    return (
        <button onClick={deleteProduct}>Delete</button>
    )
}

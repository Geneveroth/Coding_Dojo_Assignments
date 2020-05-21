import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

export default function NewForm({product, method, url}){ 
    const [title, setTitle] = useState(product.title); 
    const [price, setPrice] = useState(product.price);
    const [description, setDescription] = useState(product.description);
    
    
    const onSubmitHandler = e => {
        e.preventDefault();
            axios[method](url,{
                title,
                price,
                description
            })
            .then(()=>navigate('/'))
            .catch(console.log())
        }

    return (
        <>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <button>Submit</button>
        </form>
        </>
    )
}

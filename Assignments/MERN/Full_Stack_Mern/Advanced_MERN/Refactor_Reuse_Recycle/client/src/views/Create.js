import React from 'react'
import ProductForm from "../components/ProductForm"
export default function Create(){
    const newProduct={
        title: "",
        price: "",
        description:""
    }
    return(
        <div>
            <h1>New Product:</h1>
            <ProductForm
                product={newProduct}
                method="post"
                url={'http://localhost:8000/api/product/'}
                />
        </div>
    )
}
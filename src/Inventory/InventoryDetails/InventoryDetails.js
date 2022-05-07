import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {inventoryId} = useParams();
    const [product, setProduct] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/products/${inventoryId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    } ,[]);

    return (
        <div className='mx-40 my-5'>
            <h2 className='text-3xl text-center text-green-600'>Inventory Product Details: {product.name}</h2>
        </div>
    );
};

export default InventoryDetails;
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
            <h2 className='text-3xl text-center text-green-600 my-5'>Inventory Product Details:</h2>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={product.img} alt="" />
                    <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{product.name}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {product.description}
                    </p>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Deliver</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    useForm
} from "react-hook-form";

const InventoryDetails = () => {
    const {inventoryId} = useParams();
    const [product, setProduct] = useState({});

     const {register,handleSubmit} = useForm();
     const onSubmit = data => console.log(data);

    useEffect( () => {
        const url = `https://warehouse-e8dy.onrender.com/${inventoryId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    } ,[]);

    return (
        <div className='mx-40 my-5 text-center'>
            <h2 className='text-3xl text-center text-green-600 my-5'>Inventory Product Details:</h2>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={product.img} alt="" />
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{product._id}</h5>
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Name: {product.name}</h5>
                        <h5 className="text-gray-900 font-medium mb-2">Supplier: {product.supplierName}</h5>
                        <h5 className="text-gray-900 font-medium mb-2">Price: $ {product.price}</h5>
                        <h5 className="text-gray-900 font-medium mb-2">Available: {product.quantity}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {product.description}
                        </p>
                        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Deliver</button>
                    </div>
                </div>
            </div>
            <form className='my-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='py-2' placeholder='type quantity' {...register("example")} />
                <input className='mx-5 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' type="submit" value='restock'/>
            </form>
            <Link to='/allinventory' type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out my-5 w-52">Manage Inventory</Link>
        </div>
    );
};

export default InventoryDetails;
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useForm } from "react-hook-form";
import './UploadProduct.css'

const UploadProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://aqueous-lake-72279.herokuapp.com/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    };


    return (
        <div className='mx-40 upload-container'>
            <h2 className='text-2xl upload-title'>Upload Product</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='product name' {...register("name", { required: true })} />
                <input placeholder='product supplier' {...register("supplierName", { required: true })} />
                <input placeholder='product quantity' type='number' {...register("quantity", { required: true })} />
                <input placeholder='product price' type='number' {...register("price", { required: true })} />
                <input placeholder='product description' {...register("description", { required: true, maxLength: 30 })} />
                <input placeholder='product image link' {...register("img", { required: true })} />
                <button type='submit'>Add product</button>
                <ToastContainer position="top-center" />
            </form>
        </div>
    );
};

export default UploadProduct;
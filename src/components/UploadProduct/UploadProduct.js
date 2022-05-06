import React from 'react';
import { ToastContainer } from 'react-toastify';
import './UploadProduct.css'

const UploadProduct = () => {
    const handleUpload = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const pDetails = event.target.pDetails.value;
        const price = event.target.price.value;
        const imgUrl = event.target.imgUrl.value;

        const url = 'http://localhost:5000/uploadPd';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name, price
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => console.log(data)
        )
        console.log(name, pDetails,price, imgUrl);
    }
    return (
        <div className='mx-40 upload-container'>
            <h2 className='text-2xl upload-title'>Upload Product</h2>
            <form className='upload-form' onSubmit={handleUpload}>
                <input type="text" name="name" placeholder='Product Name'required/>
                <input type="text" name="pDetails" placeholder='Product details' />
                <input type="text" name="price" placeholder='type price' required/>
                <input type="text" name="imgUrl" placeholder='type image url'/>
                <button>Upload</button>
                <ToastContainer position="top-center" />
            </form>
        </div>
    );
};

export default UploadProduct;
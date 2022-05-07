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
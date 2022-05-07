import React from 'react';
import './Inventory.css'

const Inventory = ({product}) => {
    const {name, img, description, price} = product;
    return (
        <div>
            <div className = "">
                <div className="rounded-lg shadow-lg bg-white max-w-sm mx-auto">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img className="rounded-t-lg h-80 mx-auto" src={img} alt=""/>
                    </a>
                    <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {description}
                    </p>
                    <p className='my-2'>Price: $<span>{price}</span></p>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
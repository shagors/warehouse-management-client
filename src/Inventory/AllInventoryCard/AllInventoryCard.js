import React from 'react';

const AllInventoryCard = ({product}) => {
    const { name, img, description, price, quantity, supplierName} = product;
    return (
        <div>
            <div className="rounded-lg shadow-lg bg-white max-w-sm mx-auto">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg h-80 mx-auto" src={img} alt=""/>
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Supplier Name: {supplierName}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {description}
                    </p>
                    <p className='my-2'>Quantity: <span>{quantity}</span></p>
                    <p className='my-2'>Price: $<span>{price}</span></p>
                </div>
            </div>
        </div>
    );
};

export default AllInventoryCard;
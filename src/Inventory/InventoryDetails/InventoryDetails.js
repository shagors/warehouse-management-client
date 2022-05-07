import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {inventoryId} = useParams();
    return (
        <div className='mx-40 my-5'>
            <h2 className='text-3xl text-center text-green-600'>Inventory Details: {inventoryId}</h2>
        </div>
    );
};

export default InventoryDetails;
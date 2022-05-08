import React from 'react';
import useProducts from '../../hooks/useProducts/useProducts';
import AllInventoryCard from '../AllInventoryCard/AllInventoryCard';

const AllInventory = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1 className='text-center text-3xl my-5'>All Products List: {products.length}</h1>
            <div className = 'mx-40 grid md:grid-cols-3 gap-6'>
                {
                    products.map(product => <AllInventoryCard
                    key={product._id} product={product}
                    ></AllInventoryCard>)
                }
            </div>
        </div>
    );
};

export default AllInventory;
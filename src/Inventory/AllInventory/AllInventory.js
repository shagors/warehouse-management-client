import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts/useProducts';
import Loading from '../../Shared/Loading/Loading';
import AllInventoryCard from '../AllInventoryCard/AllInventoryCard';

const AllInventory = () => {
    const [products] = useProducts();
    if(!products){
        return <Loading></Loading>
    }
    return (
        <div className='mx-40'>
            <h1 className='text-center text-4xl my-5 text-teal-800'>Products In Store Items: {products.length}</h1>
            <div className = 'text-center my-5' >
                <Link to='/uploadPd' type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add new Item</Link>
            </div>

            <div className = 'grid md:grid-cols-3 gap-6'>
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
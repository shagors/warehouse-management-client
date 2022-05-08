import React from 'react';
import useProducts from '../hooks/useProducts/useProducts';
import OrderList from '../OrderList/OrderList';

const Orders = () => {
    const [products, setProducts] = useProducts();

    return (
        <div className='md:mx-40'>
            <h1 className='my-5 text-3xl text-center text-green-500'>Manage products List</h1>
            {
                products.map(product => <OrderList
                key={product._id} product={product}
                ></OrderList>)
            }
        </div>
    );
};

export default Orders;
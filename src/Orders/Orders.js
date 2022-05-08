import { data } from 'autoprefixer';
import React from 'react';
import useProducts from '../hooks/useProducts/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = (id) => {
        const proceed = window.confirm('Are You Sure');
        if(proceed){
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
    }
    return (
        <div className='md:mx-40'>
            <h1 className='my-5 text-3xl text-center text-green-500'>Manage products List</h1>
            {
                products.map(product => 
                <div className='my-5' key={product._id}>
                    <h3 className='text-xl text-center'>{product.name}
                    <button onClick={() => handleDelete(product._id)} type="button" className="ml-20 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
                    </h3>
                    {/* <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                <thead className="bg-white border-b">
                                    <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        First
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Handle
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Mark
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Otto
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Jacob
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Thornton
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div> */}
                </div>)
            }
        </div>
    );
};

export default Orders;
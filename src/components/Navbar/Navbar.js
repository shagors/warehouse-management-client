import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between md:px-40 px-5">
                <div className="container-fluid">
                    <Link className="text-xl text-black" to="/">Logo</Link>
                </div>
                <div>
                    <Link className='md:px-3 px-1' to='/home'>Home</Link>
                    <Link className='md:px-3 px-1' to='/products'>Products</Link>
                    <Link className='md:px-3 px-1' to='/uploadPd'>Upload-Products</Link>
                    <Link className='md:px-3 px-1' to='/orders'>Orders</Link>
                    <Link className='md:px-3 px-1' to='/login'>Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
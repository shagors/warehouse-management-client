import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
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
                    <span className='md:px-3 px-1'>{user?.displayName}</span>
                    <span className='md:px-3 px-1'>
                        {
                            user ? (
                                <button className='btn btn-info' onClick={() => signOut(auth)}>Logout</button>
                            )
                            :
                            (<Link to='/login'>Login</Link>)
                            // 'login please'
                        }
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
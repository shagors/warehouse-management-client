import React from 'react';
import {
    FaGooglePlusG
} from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='mt-5 bg-slate-400'>
            <div className='pt-5'>
                <h1 className='text-center text-xl'>All Right &amp; reservesd By &copy; Shajjad {year}</h1>
            </div>
            <div className='py-3'>
            </div>
        </div>
    );
};

export default Footer;
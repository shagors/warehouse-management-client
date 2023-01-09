import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './Inventorys.css'

const Inventorys = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://warehouse-e8dy.onrender.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    } ,[]);


    return (
        <div className = 'mx-40 grid md:grid-cols-3 gap-6'>
            {
                products?.slice(0,6)?.map(product => <Inventory
                key={product._id}
                product={product}
                ></Inventory>)
            }
            <button className="learn-more">
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <Link to='/allinventory' className="button-text">GO Inventory</Link>
            </button>
        </div>
    );
};

export default Inventorys;
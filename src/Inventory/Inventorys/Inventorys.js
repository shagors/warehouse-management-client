import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './Inventorys.css'

const Inventorys = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    } ,[]);


    return (
        <div className = 'mx-40 grid md:grid-cols-3 gap-6'>
            {
                products.map(product => <Inventory
                key={product._id}
                product={product}
                ></Inventory>)
            }
            <button className="learn-more">
                <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <Link to='/uploadPd' className="button-text">GO Inventory</Link>
            </button>
        </div>
    );
};

export default Inventorys;
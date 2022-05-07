import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';
import './Inventorys.css'

const Inventorys = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    } ,[]);


    return (
        <div className = 'mx-40 grid md:grid-cols-3 gap-6'>
            {
                products.map(product => <Inventory
                key={product.id}
                product={product}
                ></Inventory>)
            }
            <button class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <Link to='/uploadPd' class="button-text">GO Inventory</Link>
            </button>
        </div>
    );
};

export default Inventorys;
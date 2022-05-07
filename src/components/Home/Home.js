import React from 'react';
import Inventorys from '../../Inventory/Inventorys/Inventorys';
import OurService from '../../OurService/OurService';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='mx-40 text-center text-3xl text-emerald-700 my-4'>Our Products List</h1>
            <Inventorys></Inventorys>
            <h1 className='mx-40 text-center text-3xl text-emerald-700 my-4'>Our Services</h1>
            <OurService></OurService>
        </div>
    );
};

export default Home;
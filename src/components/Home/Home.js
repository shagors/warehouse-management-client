import React from 'react';
import Inventorys from '../../Inventory/Inventorys/Inventorys';
import OurPartners from '../../OurPartners/OurPartners';
import OurService from '../../OurService/OurService';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='mx-40 text-center text-3xl text-emerald-700 my-5'>Our Products List</h1>
            <Inventorys></Inventorys>
            <h1 className='mx-40 text-center text-3xl text-emerald-700 my-5'>Our Services</h1>
            <OurService></OurService>
            <h1 className='mx-40 text-center text-3xl text-emerald-700 my-5'>Our Partners</h1>
            <OurPartners></OurPartners>
        </div>
    );
};

export default Home;
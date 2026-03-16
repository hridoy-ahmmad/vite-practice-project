import React, { use } from 'react';
import PricingCard from './PricingCard';

const Pricing = ({ dataPromise, handleAddCart }) => {
    const pricingData = use(dataPromise)
    const datum = pricingData.data


    return (
        <div className='container mx-auto'>
            <div>
                <h1 className='text-5xl font-bold text-center mb-10'>Choose Your Plan</h1>
            </div>
           <div className='grid md:grid-cols-3 gap-5'>
             {
                datum.map((data, index) => <PricingCard key={index} data={data} handleAddCart={handleAddCart}></PricingCard>)
            }
           </div>
        </div>
    );
};

export default Pricing;
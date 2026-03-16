
import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingCard = ({ data, handleAddCart }) => {
    const { plan_name, duration, price_usd, des, features, popular } = data
    return (
        <div className="card bg-base-100 shadow-sm hover:shadow-2xl transition-all duration-300">
            <div className="card-body flex flex-col justify-between relative">

                <div className="flex flex-col ">
                    <div className='flex justify-between my-5 items-center  border-b border-b-gray-700'>
                        <div>
                            <h2 className="text-3xl font-bold">{plan_name} </h2>
                            {duration}
                        </div>
                        <span className="text-xl">${price_usd}</span>
                    </div>

                    <div>
                        <p>{des}</p>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            {
                                features.map(feature =>
                                    <li className='flex gap-2'>
                                        <CircleCheckBig /> {feature}
                                    </li>)
                            }

                        </ul>
                    </div>
                </div>
                <div className='absolute top-2 right-5'>
                    {
                        popular && <span className="badge badge-xs badge-warning">Most Popular</span>
                    }
                </div>
                <div
                    onClick={() => handleAddCart(data)}
                    className="mt-6">
                    <button className="btn btn-primary btn-block focus:scale-110">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;
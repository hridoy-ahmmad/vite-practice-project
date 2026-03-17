
import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingCard = ({ data, handleAddCart }) => {
    const { plan_name, duration, price_usd, des, features, popular , id} = data
    return (
        <div className="card bg-base-100 shadow-sm hover:shadow-2xl transition-all duration-300">
            <div className="card-body flex flex-col justify-between relative">
                <div className="flex flex-col ">
                    <div className='flex justify-between items-center  border-b border-b-gray-300 pb-2 '>
                        <div>
                            <h2 className="text-xl font-bold ">{plan_name} </h2>
                            <p className='py-2 font-medium'>{duration}</p>
                        </div>
                        <span className="text-xl font-semibold">${price_usd}</span>

                    </div>
                    <p className='mt-2 font-medium'>{des}</p>

                </div>
                <div className='absolute top-2 right-5'>
                    {
                        popular && <span className="badge badge-xs badge-warning">Most Popular</span>
                    }
                </div>




                
                <div className="mt-6 flex items-center justify-between">
                    <button onClick={() => handleAddCart(data)}
                        className="btn btn-primary  focus:scale-110">Add to Cart</button>
                    <button
                        onClick={() => document.getElementById(id).showModal()} className="btn btn-primary  focus:scale-110 ">view Details</button>
                </div>
            </div>


            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id={`${id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="card-body flex flex-col justify-between relative">
                        <div className="flex flex-col ">
                            <div className='flex justify-between items-center  border-b border-b-gray-300 pb-2 '>
                                <div>
                                    <h2 className="text-xl font-bold ">{plan_name} </h2>
                                    <p className='py-2 font-medium'>{duration}</p>
                                </div>
                                <span className="text-xl font-semibold">${price_usd}</span>

                            </div>

                            <div className=''>
                                <p className='mt-2 font-medium'>{des}</p>
                                <ul className="mt-6 flex flex-col gap-2 text-xs p-4 rounded-sm">
                                    {
                                        features.map(feature =>
                                            <li className='flex gap-2 items-center font-medium'>
                                                <CircleCheckBig className='text-green-600' /> {feature}
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
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default PricingCard;
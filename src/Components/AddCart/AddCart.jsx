import React, {  } from 'react';

const AddCart = ({ cart, removeHandle }) => {



    return (
        <div className=''>
            <h1 className='text-center font-bold text-xl w-full'>Add to cart: {cart.length} </h1>
            <div>
                {
                    cart.map((item, index) => (
                        <div key={index} className='bg-green-300 p-3 rounded-sm flex justify-between items-center mt-2'>
                            <div>
                                <h1 className='font-bold'> Package Name:  {item.plan_name} </h1>
                                <h4>Price: ${item.price_usd} </h4>
                            </div>
                            <button
                            onClick={()=>removeHandle(item.id)}
                             className='border py-1 px-2 cursor-pointer rounded-sm border-gray-200 bg-white focus:scale-105'>Remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AddCart;
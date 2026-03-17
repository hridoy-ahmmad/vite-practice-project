import { ShoppingCart } from 'lucide-react';
import React, { } from 'react';
import NoCart from '../NoCart';

const AddCart = ({ cart, removeHandle }) => {

    let sum = 0
    for (const item of cart) {
        sum = sum + item.price_usd
    }

    console.log(sum);


    return (
        <div className="bg-white p-5 rounded-xl shadow-lg w-full ">
            {/* Cart Header */}
            <h1 className="text-center font-bold text-2xl flex items-center justify-center gap-2 mb-5">
                <ShoppingCart className="text-2xl text-primary" /> Your Cart ({cart.length})
            </h1>

            {/* Empty Cart */}
            {cart.length === 0 && <NoCart />}

            {/* Cart Items */}
            <div className="flex flex-col gap-4">
                {cart.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white/80 p-4 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0  shadow-md hover:shadow-lg transition-all duration-200"
                    >
                        <div>
                            <h2 className="font-semibold text-lg">{item.plan_name}</h2>
                            <p className="text-gray-600 mt-1">${item.price_usd}</p>
                        </div>
                        <button
                            onClick={() => removeHandle(item.id)}
                            className="border  border-gray-100 text-gray-700 px-3 py-1 rounded-sm shadow-sm hover:scale-105 duration-100 "
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            {/* Total Price  */}

            <div className="mt-5 flex justify-end items-center font-bold text-lg border-t border-t-gray-300 pt-3 text-black/70">
                <span >Total: ${sum} </span>

            </div>

        </div>
    );
};

export default AddCart;
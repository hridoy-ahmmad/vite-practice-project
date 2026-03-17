import React from 'react';

const NoCart = () => {
    return (
        <div className="flex flex-col items-center justify-center p-5 bg-gray-100 rounded-lg mt-5 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 text-sm">Please add a plan to your cart to see it here.</p>
        </div>
    );
};

export default NoCart;
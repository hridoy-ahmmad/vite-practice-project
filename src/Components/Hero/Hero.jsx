import React from 'react';
import heroImg from '../../assets/hero.jpg'

const Hero = () => {
    return (
        <div
            style={{ backgroundImage: `url(${heroImg})` }}
            className='relative bg-cover bg-no-repeat bg-top py-30 md:py-50 w-full  flex justify-center md:items-center '
        >
            {/* Overlay */}
            <div className='absolute inset-0 bg-black/60'></div> 

            {/* Content */}
            <div className='relative container mx-auto text-center text-white'>
                <h3 className='text-lg md:text-xl font-semibold'>My Gym</h3>
                <h1 className='text-3xl md:text-5xl font-bold my-4'>Alternative Gym Center</h1>
                <p className='text-sm md:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                    Natus possimus magni maxime suscipit fuga, sequi animi. Labore sunt magni laboriosam!
                </p>
                <button className='btn btn-active mt-5'>Enjoy More</button>
            </div>
        </div>
    );
};

export default Hero;
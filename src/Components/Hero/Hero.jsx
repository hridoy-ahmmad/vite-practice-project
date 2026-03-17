import React from 'react';
import heroImg from '../../assets/heroIm.jpg'

const Hero = () => {
    return (
        <div
            style={{ backgroundImage: `url(${heroImg})` }}
            className='relative bg-cover bg-no-repeat bg-center py-30 md:py-45 w-full  flex justify-center md:items-center -mt-10 z-0'
        >
            {/* Overlay */}
            <div className='absolute inset-0 bg-black/60'></div> 

            {/* Content */}
            <div className='relative container mx-auto text-center text-white'>
                <h3 className='text-lg md:text-xl font-semibold'>My Class</h3>
                <h1 className='text-3xl md:text-7xl font-bold my-4'>Alternative School</h1>
                <p className='md:text-2xl '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                    Natus possimus magni maxime suscipit fuga, sequi animi. Labore sunt magni laboriosam!
                </p>
                <button className='btn btn-active mt-5'>Enjoy More</button>
            </div>
        </div>
    );
};

export default Hero;
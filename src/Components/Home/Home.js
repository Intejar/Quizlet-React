import React from 'react';
import one from '../../images/one.jpg'

const Home = () => {
    return (
        <div className='mt-10'>
            <div className='flex justify-evenly items-center'>
                <div>
                    <h1>This is Homepage</h1>
                </div>
                <img className='h-50' src={one} alt="" />

            </div>
        </div>
    );
};

export default Home;
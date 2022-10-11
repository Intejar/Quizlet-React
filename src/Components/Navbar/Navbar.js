import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <div className='flex justify-between mx-10 p-5 bg-blue-100'>
            <div>
                <h1 className='text-3xl font-bold'>Coursera</h1>
            </div>
            <div>
                <Link className='mx-5 font-bold hover:text-blue-500' to={'/home'}>Home</Link>
                <Link className='mx-5 font-bold hover:text-blue-500' to={'/courses'}>Courses</Link>
                <Link className='mx-5 font-bold hover:text-blue-500' to={'/analysis'}>Analysis</Link>
                <Link className='mx-5 font-bold hover:text-blue-500' to={'blog'}>Blog</Link>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <div className='bg-blue-200'>
            <div className='flex justify-between mx-10 p-5'>
                <div>
                    <h1 className='text-3xl font-bold'>Quizlet</h1>
                </div>
                <div>
                    <Link className='mx-5 font-bold hover:text-blue-500' to={'/home'}>Home</Link>
                    <Link className='mx-5 font-bold hover:text-blue-500' to={'/courses'}>Courses</Link>
                    <Link className='mx-5 font-bold hover:text-blue-500' to={'/analysis'}>Analysis</Link>
                    <Link className='mx-5 font-bold hover:text-blue-500' to={'blog'}>Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
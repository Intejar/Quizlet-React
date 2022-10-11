import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Cart = ({ detail }) => {
    const {id, name, total, logo} = detail;

    return (
        <div>
            <div className='block  w-40 border  border-sky-500'>
                <img className='h-20 w-full' src={logo} alt="" />
                <div className='my-10'>
                    <h1 className='text-3xl'>{name}</h1>
                    <div className='flex justify-evenly items-center mt-3'>
                        <small>questions: {total}</small>
                    </div>
                    <div className='flex justify-center items-center mt-2 bg-blue-200 border-solid rounded-sm'>
                        <Link to={`/course/${id}`}><small>start quiz</small></Link>
                        <ChevronRightIcon className='w-5 h-3'></ChevronRightIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
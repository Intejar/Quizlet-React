import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import one from '../../images/one.jpg'


const Courses = () => {
    const courses = useLoaderData();
    const details = courses.data;
    // console.log(details)
    return (
        <div className='mt-10 '>
            {/* <div className='flex justify-evenly items-center'>
                <div>
                    <h1>This is Homepage</h1>
                </div>
                <img className='h-40' src={one} alt="" />
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mx-10'>
                {
                    details.map(detail=><Cart key={detail.id} detail={detail}></Cart>)
                    
                }
            </div>
        </div>
    );
};

export default Courses;
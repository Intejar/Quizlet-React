import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizes = useLoaderData();
    const { name, total } = quizes.data
    const questions = quizes.data.questions

    return (
        <div>
            <div className='bg-blue-300 p-10 my-10 w-60 mx-auto fixed top-5'>
                <h1 className='md:text-2xl text-white font bold'>  START QUIZ OF <span className='text-3xl text-blue-700 font-extrabold'>{name}</span></h1>
                <h2 className='md:text-xl text-blue-900 font-semibold' >Total: <span className='text-red-500'>{total}</span></h2>
                <h2 className='md:text-xl text-blue-900 font-semibold'>correct: <span className='text-red-500' id='correct'>0</span></h2>
                <h2 className='md:text-xl text-blue-900 font-semibold'>incorrect: <span className='text-red-500' id='incorrect'>0</span></h2>
            </div>
            {
                questions.map((question, index) => <Questions key={question.id} question={question} index={index}></Questions>)
            }
        </div>
    );
};

export default Quiz;
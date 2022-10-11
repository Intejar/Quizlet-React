import React from 'react';
import Option from '../Option/Option';

const Questions = ({ question }) => {
    const answers = question.options
    console.log(answers.map(answer => console.log(answer)));
    return (
        <div className='border border-red-200 my-10'>
            <h1>{question.question}</h1>
            <div className='grid grid-cols-2 m-5 gap-5'>
                {
                    answers.map(answer => <Option answer={answer}></Option>)
                }
            </div>
        </div>
    );
};

export default Questions;
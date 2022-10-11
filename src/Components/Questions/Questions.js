import React from 'react';
import Option from '../Option/Option';

const Questions = ({ question }) => {
    const answers = question.options
    console.log(answers);
    return (
        <div className='border border-red-200 my-10'>
            <h1>{question.question}</h1>
            {
                // answers.forEach((answer)=><Option answer={answer}></Option>)
            }
        </div>
    );
};

export default Questions;
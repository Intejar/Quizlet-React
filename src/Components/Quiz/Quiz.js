import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizes = useLoaderData();
    const { name, total } = quizes.data
    const questions = quizes.data.questions

    return (
        <div>
            <h1>start quiz of {name}</h1>
            <h2>Total:{total}</h2>
            <h2>correct: <span id='correct'>0</span></h2>
            <h2>incorrect: <span id='incorrect'>0</span></h2>
            {
                questions.map(question =><Questions key={question.id} question={question}></Questions>)
            }
        </div>
    );
};

export default Quiz;
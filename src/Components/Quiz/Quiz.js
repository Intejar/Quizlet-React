import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizes = useLoaderData();
    const { name, total } = quizes.data
    const questions = quizes.data.questions
    console.log(questions.question)
    return (
        <div>
            <h1>start quiz of {name}</h1>
            {
                questions.map(question => <Questions key={question.id} question={question}></Questions>)
            }
        </div>
    );
};

export default Quiz;
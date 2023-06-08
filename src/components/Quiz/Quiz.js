import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Quiz = () => {
    const quiz=useLoaderData().data.questions;
    console.log(quiz);
    return (
        <div className="mt-28">
            <p>holla {quiz.length}</p>
            {
               quiz.map(sQuiz => <SingleQuiz key={sQuiz.id} sQuiz={sQuiz} ></SingleQuiz>)
            }
        </div>
    );
};

export default Quiz;
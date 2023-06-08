import React from 'react';

const SingleQuiz = ({sQuiz}) => {
    const {question,options}=sQuiz;
    const questionText = question.replace(/<\/?p>/g, '');
    return (
        <div className=''>
            <h6 className='font-bold mt-3 mb-3'>{questionText}</h6>
            {
                options.map(option => <section><input className='' type='checkbox'/><span>{option}</span></section>
                )
            }
        </div>
    );
};

export default SingleQuiz;
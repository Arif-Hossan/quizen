import React from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';

const Topics = () => {
    try{
        const topics = useLoaderData();
    console.log(topics);
    } catch(error){
        console.log(error);
    }
    return (
        <div className='mt-20'>

        </div>
    );
};

export default Topics;
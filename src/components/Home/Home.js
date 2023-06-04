import React from 'react';
import quizbanner from '../../images/quizbanner.jpg'
import Topics from '../Topics/Topics';
const Home = () => {

    return (
        <section className='mt-20'>
           <img src={quizbanner} className='h-60 w-full object-cover' alt="banner"/>
           <Topics></Topics>
        </section>


    );
};

export default Home;
import React from 'react';
import quizbanner from '../../images/quizbanner.jpg'
const Home = () => {
    
    return (
        <section className='mt-24'>
           <img src={quizbanner} className='h-60 w-full object-cover' alt="banner"/>
        </section>
    );
};

export default Home;
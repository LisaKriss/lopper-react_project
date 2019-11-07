import React from 'react';
import './App.scss';
import Hero from './components/Hero/Hero';
import Intro from './components/Intro/Intro';


const App = () => {
    return (
        <div className='app-wrapper'>
            <Hero/>
            <Intro/>
        </div>
    )
}

export default App;

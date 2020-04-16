import React from 'react';
import Classes from './index.module.css'
import Intro from '../../components/Intro'
import About from '../../components/About';

function Landing() {
    return (
        <main className={Classes.main}>
            <Intro />
            <About />
        </main>
    )
}

export default Landing

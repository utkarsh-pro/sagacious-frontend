import React from 'react';
import Classes from './index.module.css'
import Intro from '../../components/Intro'
import About from '../../components/About';
import Projects from '../../components/Projects'
import { ReactComponent as UpArrow } from '../../assets/uparrow.svg'
import { animateScroll as scroll } from 'react-scroll'

const scrollToTop = () => {
    scroll.scrollToTop()
}

function Landing() {
    return (
        <main className={Classes.main}>
            <Intro />
            <About />
            <Projects />
            <div className={Classes.scrollBtn} onClick={scrollToTop}>
                <UpArrow fill="white" />
            </div>
        </main>
    )
}

export default Landing

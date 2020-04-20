import React, { Fragment } from 'react';
import Classes from './index.module.css'
import Intro from './Intro'
import About from './About';
import Projects from './Projects'
import { ReactComponent as UpArrow } from '../../assets/uparrow.svg'
import { animateScroll as scroll } from 'react-scroll'

const scrollToTop = () => {
    scroll.scrollToTop()
}

function Landing() {
    return (
        <Fragment>
            <Intro />
            <About />
            <Projects />
            <div className={Classes.scrollBtn} onClick={scrollToTop}>
                <UpArrow fill="white" />
            </div>
        </Fragment>
    )
}

export default Landing

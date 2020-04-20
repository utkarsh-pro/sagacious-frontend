import React from 'react'
import Classes from './index.module.css'
import { ReactComponent as Linkedin } from '../../../assets/linkedinicon.svg'
import { ReactComponent as Github } from '../../../assets/githubicon.svg'
import { ReactComponent as Twitter } from '../../../assets/twittericon.svg'

// Import global styles
import Global from '../../../styles/global.module.css'

function Intro() {
    return (
        <section className={Classes.section}>
            <div className={`${Global.container}`}>
                <div className={Classes.content}>
                    <h1 className={Classes.title}>Utkarsh Srivastava</h1>
                    <h2 className={Classes.tagline}>Curiosity driven and a passionate web developer</h2>
                    <div className={Classes.icons}>
                        <a
                            className={Classes.iconContainer}
                            href="https://www.linkedin.com/in/utkarsh-srivastava-2310/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Linkedin className={Classes.icon} />
                        </a>
                        <a
                            className={Classes.iconContainer}
                            href="https://github.com/utkarsh-pro"
                            target="_blank" rel="noopener noreferrer">
                            <Github className={Classes.icon} />
                        </a>
                        <a
                            className={Classes.iconContainer}
                            href="https://twitter.com/utkarshdev23"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Twitter className={Classes.icon} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro

import React from 'react'
import Classes from './index.module.css'
import { ReactComponent as Linkedin } from '../../assets/linkedinicon.svg'
import { ReactComponent as Github } from '../../assets/githubicon.svg'
import { ReactComponent as Twitter } from '../../assets/twittericon.svg'
import Particles from 'react-particles-js'

const logo = "../../assets/twittericon.svg"

function Intro() {
    return (
        <section className={Classes.container}>
            <div className={Classes.content}>
                <h1 className={Classes.title}>Utkarsh Srivastava</h1>
                <h2 className={Classes.tagline}>Curiosity driven and a passionate web developer</h2>
                <div className={Classes.icons}>
                    <Linkedin className={Classes.icon} />
                    <Github className={Classes.icon} />
                    <Twitter className={Classes.icon} />
                </div>
            </div>
            <Particles
                params={{
                    particles: {
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "#3CA9D1",
                                blur: 5
                            }
                        }
                    }
                }}
                style={{
                    width: '100%',
                    backgroundImage: `url(${logo})`
                }}
            />
        </section>
    )
}

export default Intro

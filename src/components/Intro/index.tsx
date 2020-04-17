import React from 'react'
import Classes from './index.module.css'
import { ReactComponent as Linkedin } from '../../assets/linkedinicon.svg'
import { ReactComponent as Github } from '../../assets/githubicon.svg'
import { ReactComponent as Twitter } from '../../assets/twittericon.svg'
import Particles, { HoverMode, InteractivityDetect } from 'react-particles-js'

// const logo = "../../assets/twittericon.svg"
const value_area = window.screen.width
const number_of_particles = Math.floor(0.04 * value_area)

function Intro() {
    return (
        <section className={Classes.container}>
            <div className={Classes.background}>
                {false && <Particles
                    className={Classes.tsparticles}
                    params={{
                        particles: {
                            number: {
                                value: number_of_particles
                            },
                            color: {
                                value: "#000000"
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 0,
                                    color: "#ff0000"
                                }
                            },
                            size: {
                                value: 10,
                                random: true
                            },
                            line_linked: {
                                enable: true,
                                distance: 300,
                                color: "#000000",
                                opacity: 0.2,
                                width: 2
                            }
                        },
                        interactivity: {
                            detect_on: InteractivityDetect.canvas,
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: HoverMode.repulse
                                }
                            }
                        },
                        retina_detect: true
                    }}
                />}
            </div>
            <div className={Classes.content}>
                <h1 className={Classes.title}>Utkarsh Srivastava</h1>
                <h2 className={Classes.tagline}>Curiosity driven and a passionate web developer</h2>
                <div className={Classes.icons}>
                    <a href="https://www.linkedin.com/in/utkarsh-srivastava-2310/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className={Classes.icon} />
                    </a>
                    <a href="https://github.com/utkarsh-pro" target="_blank" rel="noopener noreferrer">
                        <Github className={Classes.icon} />
                    </a>
                    <a href="https://twitter.com/utkarshdev23" target="_blank" rel="noopener noreferrer">
                        <Twitter className={Classes.icon} />
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Intro

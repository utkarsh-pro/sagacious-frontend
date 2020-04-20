import React from 'react'
import Classes from './index.module.css'
import ScrollAnimDiv from '../../../components/ScrollAnimDiv'

// Import global styles
import Global from '../../../styles/global.module.css';

function About() {
    return (
        <section className={Classes.container} id="about">
            <div className={Classes.aboutmeContainer}>
                <ScrollAnimDiv
                    className={`${Global.container} ${Classes.container}`}
                    classBefore={Classes.initTransition}
                    classAfter={Classes.transition}
                    options={{ threshold: 0.5 }}>
                    <div className={Classes.aboutme}>
                        <h2 className={Classes.title}>ABOUT</h2>
                        <div className={Classes.aboutContent}>
                            <p className={Classes.contentP}>
                                I am a full stack web developer and have a serious passion for building web applications at scale.
                                Co-founded Hackstrap Technologies to solve the problems faced by investors and founders.
                                Working for over two years on scalable real time communication.
                            </p>
                        </div>

                        <h3 className={Classes.titlemin}>Software Development:</h3>
                        <p className={Classes.contentPL}>
                            1. Cloud computing, Domain Driven Design, Microservices, Full stack web applications.
                        </p>
                        <p className={Classes.contentPL}>
                            2. Low level programs in Golang/C++
                        </p>
                        <p className={Classes.contentPL}>
                            3. Open source libraries and softwares published on github and NPM.
                        </p>
                    </div>
                </ScrollAnimDiv>
            </div>

            <div className={Classes.techstackContainer}>
                <ScrollAnimDiv
                    className={`${Global.container} ${Classes.container}`}
                    classBefore={Classes.initTransition}
                    classAfter={Classes.transition}
                    options={{ threshold: 0.5 }}>
                    <div className={Classes.techstack}>
                        <div className={Classes.techstackContent}>
                            {/* Second Title */}
                            <h3 className={Classes.titlemin}>
                                Technologies used to build the entire sagacious.dev platform
                            <br />
                            (Explore other applications available on the platform here)
                        </h3>

                            {/* Stack Block */}
                            <div className={Classes.stackBlock}>
                                {/* Frontend Block */}
                                <div className={Classes.block}>
                                    <h3 className={Classes.tag}>Frontend</h3>
                                    <ul>
                                        <li>React - Used for creating the UI</li>
                                        <li>Redux - Used for managing the state</li>
                                        <li>Socket.io - For Reliable Websocket communication</li>
                                    </ul>
                                </div>

                                {/* Backend Block */}
                                <div className={Classes.block}>
                                    <h3 className={Classes.tag}>Backend</h3>
                                    <ul>
                                        <li>Microservices architecture</li>
                                        <li>Docker for containerisation</li>
                                        <li>Docker swarm for orchestration<br />(Why not Kubernetes? Know more)</li>
                                        <li>Traefik as reverse proxy</li>
                                        <li>NGINX for serving static sites like this</li>
                                        <li>Grafana and Prometheus for monitoring</li>
                                    </ul>
                                    <p className={Classes.contentP}>
                                        And many more depending upon the needs of a service.<br />
                                    (Overkill? Know more)
                                </p>
                                </div>

                                {/* Devops Block */}
                                <div className={Classes.block}>
                                    <h3 className={Classes.tag}>DevOps</h3>
                                    <p className={Classes.contentP}>
                                        Github actions are used for creating docker images which is then pushed to the server
                                    <br />and automatically deployed using a minimal CD tool I developed.
                                </p>
                                </div>
                            </div>
                            <h2 className={Classes.tag}>
                                Interested in knowing more about the architecture of sagacious.dev platform? Read here.
                        </h2>
                        </div>
                    </div>
                </ScrollAnimDiv>

            </div>
        </section>
    )
}

export default About

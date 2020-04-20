import React from 'react'
import Classes from './index.module.css'
import Card, { ICard } from '../../../components/Card'
import { LinkType } from '../../../components/LinkButton'
import ScrollAnimDiv from '../../../components/ScrollAnimDiv'

// Global classes
import Global from '../../../styles/global.module.css'

const projects: ICard[] = [
    {
        text: "Template Generator in Golang",
        img: require("../../../assets/images/portfolio.jpeg"),
        link: { type: LinkType.EXTERNAL, link: "https://github.com/utkarsh-pro/template-generator" }
    },
    {
        text: "Chatter: Node.js based Chatting Application",
        img: require("../../../assets/images/portfolio.jpeg"),
        link: { type: LinkType.EXTERNAL, link: "https://chatt-for-fun.herokuapp.com" }
    },
    {
        text: "NodeJS Snowflake: 64 bit ID generator",
        img: require("../../../assets/images/portfolio.jpeg"),
        link: { type: LinkType.EXTERNAL, link: "https://www.npmjs.com/package/nodejs-snowflake" }
    },
    {
        text: "ScreenShare: A WebRTC based screen sharing application",
        img: require("../../../assets/images/portfolio.jpeg"),
        link: { type: LinkType.EXTERNAL, link: "https://screenshare.sagacious.dev" }
    }
]

function Projects() {
    return (
        <section className={Classes.projectsContainer} id="projects">
            <div className={Global.container}>
                <div className={Classes.projects}>
                    <h2 className={Classes.title}>Projects</h2>
                    <div className={Classes.wrapper}>
                        {projects.map((project, i) => (
                            <ScrollAnimDiv
                                className={Classes.card}
                                key={"card_" + i}
                                classBefore={Classes.animBefore}
                                styleComponenet={{ transitionDelay: `${i * 0.1}s` }}
                                classAfter={Classes.animAfter}>
                                <Card {...project} />
                            </ScrollAnimDiv>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects

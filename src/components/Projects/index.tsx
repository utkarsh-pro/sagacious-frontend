import React from 'react'
import Classes from './index.module.css'
import Card, { ICard } from '../Card'
import { LinkType } from '../LinkButton'
import ScrollAnimDiv from '../ScrollAnimDiv'

const projects: ICard[] = [
    {
        text: "Project1",
        img: require("../../assets/images/portfolio.png"),
        link: { type: LinkType.EXTERNAL, link: "https://hackstrap.com" }
    },
    {
        text: "Project2",
        img: require("../../assets/images/portfolio.png"),
        link: { type: LinkType.EXTERNAL, link: "https://hackstrap.com" }
    },
    {
        text: "Project3",
        img: require("../../assets/images/portfolio.png"),
        link: { type: LinkType.EXTERNAL, link: "https://hackstrap.com" }
    },
    {
        text: "Project4",
        img: require("../../assets/images/portfolio.png"),
        link: { type: LinkType.EXTERNAL, link: "https://hackstrap.com" }
    },
    {
        text: "Project5",
        img: require("../../assets/images/portfolio.png"),
        link: { type: LinkType.EXTERNAL, link: "https://hackstrap.com" }
    },
    {
        text: "Project6",
        img: require("../../assets/images/portfolio.png"),
        link: { type: LinkType.EXTERNAL, link: "https://hackstrap.com" }
    }
]

function Projects() {
    return (
        <section className={Classes.projectsContainer} id="projects">
            <div className={Classes.projects}>
                <h2 className={Classes.title}>Projects</h2>
                <div className={Classes.wrapper}>
                    {projects.map((project, i) => (
                        <ScrollAnimDiv
                            className={Classes.card}
                            key={"card_" + i}
                            classBefore={Classes.animBefore}
                            styleComponenet={{ transitionDelay: `${i * 0.2}s` }}
                            classAfter={Classes.animAfter}>
                            <Card {...project} />
                        </ScrollAnimDiv>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

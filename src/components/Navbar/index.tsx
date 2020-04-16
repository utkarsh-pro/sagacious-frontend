import React, { useEffect, useState } from 'react'
import Classes from './index.module.css'
import { Link } from 'react-router-dom'

// =================== INTERFACES ===========================
export enum LinkType {
    internal = "internal",
    external = "external"
}

export interface ILink {
    type: LinkType;
    link: string;
}

export interface INavigationButton {
    name: string;
    link: ILink
}

// =================== CONSTANTS ============================

const btnNamesLeft: INavigationButton[] = [
    { name: "Utkarsh Srivastava", link: { type: LinkType.internal, link: "/" } },
    { name: "About", link: { type: LinkType.internal, link: "/#about" } },
    { name: "Projects", link: { type: LinkType.internal, link: "/#about" } },
    { name: "Resume", link: { type: LinkType.internal, link: "/resume" } },
]

const btnNamesRight: INavigationButton[] = [
    { name: "Blog", link: { type: LinkType.external, link: "https://blog.sagacious.dev" } },
    { name: "Contact", link: { type: LinkType.internal, link: "/#contact" } },
]

// =================== HELPER COMPONENTS ====================

function NavigationButton({ name, link }: INavigationButton) {
    if (link.type === LinkType.internal)
        return (
            <Link to={link.link}>
                <div className={Classes.navItem}>
                    {name}
                </div>
            </Link>
        )
    else return (
        <a href={link.link}>
            <div className={Classes.navItem}>
                {name}
            </div>
        </a>
    )
}

// =================== MAIN COMPONENT =======================

function Navbar() {
    const [navClasses, setNavClasses] = useState([Classes.nav])

    // Adding a scroll listener on the window
    useEffect(() => {
        window.onscroll = () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                setNavClasses([Classes.nav, Classes.navmin])
            } else {
                setNavClasses([Classes.nav])
            }
        }
    }, [])

    return (
        <nav className={navClasses.join(' ')}>
            <div className={Classes.block}>
                {btnNamesLeft.map((btn, i) => <NavigationButton {...btn} key={i} />)}
            </div>
            <div className={Classes.block}>
                {btnNamesRight.map((btn, i) => <NavigationButton {...btn} key={i} />)}
            </div>
        </nav>
    )
}

export default Navbar

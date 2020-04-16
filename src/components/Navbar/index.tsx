import React, { useEffect, useState } from 'react'
import Classes from './index.module.css'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

// =================== INTERFACES ===========================
export enum LinkType {
    internal = "internal",
    external = "external",
    internalHash = "internalHash"
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
    { name: "About", link: { type: LinkType.internalHash, link: "about" } },
    { name: "Projects", link: { type: LinkType.internalHash, link: "projects" } },
    { name: "Resume", link: { type: LinkType.internal, link: "/resume" } },
]

const btnNamesRight: INavigationButton[] = [
    { name: "Blog", link: { type: LinkType.external, link: "https://blog.sagacious.dev" } },
    { name: "Contact", link: { type: LinkType.internalHash, link: "contact" } },
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
    else if (link.type === LinkType.internalHash)
        return (
            <ScrollLink
                style={{ cursor: "pointer" }}
                activeClass={Classes.active}
                spy={true}
                smooth={true}
                offset={-1 * 3.5 * 16}
                duration={500}
                to={link.link}>
                <div className={Classes.navItem}>
                    {name}
                </div>
            </ScrollLink>
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

    // Mobile states
    const [mobileNavClasses, setMobileNavClasses] = useState([Classes.mobile])
    const [mobileNavState, setMobileNavState] = useState(false)

    // Adding a scroll listener on the window
    useEffect(() => {
        window.onscroll = () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                setNavClasses([Classes.nav, Classes.navmin])
            } else {
                setNavClasses([Classes.nav])
            }
        }
        return () => {
            window.onscroll = null
        }
    }, [])

    useEffect(() => {
        if (mobileNavState)
            setMobileNavClasses([Classes.mobile, Classes.open])
        else
            setMobileNavClasses([Classes.mobile]);
    }, [mobileNavState])

    const onClickHandler = () => {
        setMobileNavState(!mobileNavState)
    }

    return (
        <nav className={navClasses.join(' ')}>
            <div className={Classes.block}>
                {btnNamesLeft.map((btn, i) => <NavigationButton {...btn} key={i} />)}
            </div>
            <div className={Classes.block}>
                {btnNamesRight.map((btn, i) => <NavigationButton {...btn} key={i} />)}
            </div>
            <div className={mobileNavClasses.join(' ')}>
                <div className={Classes.hamburgerContainer} onClick={onClickHandler}>
                    <div className={Classes.hamburger} />
                </div>
                <div className={Classes.mobileBlock}>
                    <div className={Classes.navItems}>
                        {[...btnNamesLeft, ...btnNamesRight].map((btn, i) => <NavigationButton {...btn} key={i} />)}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

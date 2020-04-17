import React, { useEffect, useState } from 'react'
import Classes from './index.module.css'
import LinkButton, { ILinkButton, LinkType } from '../LinkButton'

// =================== CONSTANTS ============================

const btnNamesLeft: ILinkButton[] = [
    { name: "Utkarsh Srivastava", link: { type: LinkType.INTERNAL, link: "/" } },
    { name: "About", link: { type: LinkType.INTERNAL_HASH, link: "about" } },
    { name: "Projects", link: { type: LinkType.INTERNAL_HASH, link: "projects" } },
    { name: "Resume", link: { type: LinkType.INTERNAL, link: "/resume" } },
]

const btnNamesRight: ILinkButton[] = [
    { name: "Blog", link: { type: LinkType.EXTERNAL, link: "https://blog.sagacious.dev" } },
    { name: "Contact", link: { type: LinkType.INTERNAL_HASH, link: "contact" } },
]

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
                {btnNamesLeft.map((btn, i) => (
                    <LinkButton
                        className={Classes.navItem}
                        activeClassName={Classes.active}
                        key={i}
                        {...btn} />
                ))}
            </div>
            <div className={Classes.block}>
                {btnNamesRight.map((btn, i) => (
                    <LinkButton
                        className={Classes.navItem}
                        activeClassName={Classes.active}
                        key={i}
                        {...btn} />
                ))}
            </div>
            <div className={mobileNavClasses.join(' ')}>
                <div className={Classes.hamburgerContainer} onClick={onClickHandler}>
                    <div className={Classes.hamburger} />
                </div>
                <div className={Classes.mobileBlock}>
                    <div className={Classes.navItems}>
                        {[...btnNamesLeft, ...btnNamesRight].map((btn, i) => (
                            <LinkButton
                                className={Classes.navItem}
                                activeClassName={Classes.active}
                                key={i}
                                {...btn} />
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

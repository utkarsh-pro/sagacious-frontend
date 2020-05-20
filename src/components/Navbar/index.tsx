import React, { useEffect, useState, useRef } from 'react'
import Classes from './index.module.css'
import LinkButton, { ILinkButton, LinkType } from '../LinkButton'

// Import global styles
import Global from '../../styles/global.module.css'

// =================== CONSTANTS ============================

const btnNamesLeft: ILinkButton[] = [
    { name: "Utkarsh Srivastava", link: { type: LinkType.INTERNAL, link: "/" } },
    { name: "About", link: { type: LinkType.INTERNAL_HASH, link: "about" } },
    { name: "Projects", link: { type: LinkType.INTERNAL_HASH, link: "projects" } },
    { name: "Resume", link: { type: LinkType.INTERNAL, link: "/resume" } },
]

const btnNamesRight: ILinkButton[] = [
    { name: "Blog", link: { type: LinkType.EXTERNAL, link: "https://blog.sagacious.dev" } },
    { name: "Contact", link: { type: LinkType.INTERNAL, link: "/contact" } },
]

// =================== MAIN COMPONENT =======================

function Navbar() {
    const [navClasses, setNavClasses] = useState([Classes.nav])

    // Mobile states
    const [mobileNavClasses, setMobileNavClasses] = useState([Classes.mobile])
    const [mobileNavState, setMobileNavState] = useState(false)

    const ref = useRef<HTMLDivElement>(null)

    // Adding a scroll listener on the window
    useEffect(() => {
        window.onscroll = () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                setNavClasses([Classes.nav, Classes.navmin])
            } else {
                setNavClasses([Classes.nav])
            }
        }

        const handleClick = (event: MouseEvent) => {
            if (ref.current?.contains(event.target as Node)) return;
            else setMobileNavState(false)
        }

        // Add an event listener on the page to listen for taps
        document.addEventListener("mousedown", handleClick)

        return () => {
            window.onscroll = null;
            document.removeEventListener("mousedown", handleClick)
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
        <nav className={navClasses.join(' ')} ref={ref}>
            <div className={`${Global.container} ${Classes.container}`}>
                {/* Desktop markup */}
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
                {/* Desktop markup ends */}

                {/* Mobile markup */}
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
                {/* Mobile markup ends */}
            </div>
        </nav>
    )
}

export default Navbar

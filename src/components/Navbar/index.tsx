import React from 'react'
import Classes from './index.module.css'

// =================== INTERFACES ===========================
interface INavigationButton {
    name: string;
    link: string | null;
}

// =================== CONSTANTS ============================

const btnNamesLeft: INavigationButton[] = [
    { name: "Utkarsh Srivastava", link: "/" },
    { name: "Projects", link: null },
    { name: "Resume", link: null },
    { name: "About", link: null },
]

const btnNamesRight: INavigationButton[] = [
    { name: "Blog", link: null },
    { name: "Contact", link: null },
]

// =================== HELPER COMPONENTS ====================

function NavigationButton({ name }: INavigationButton) {
    return (
        <div className={Classes.navItem}>
            {name}
        </div>
    )
}

// =================== MAIN COMPONENT =======================

function Navbar() {
    return (
        <nav className={Classes.nav}>
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

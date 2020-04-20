import React from 'react'
import Classes from './index.module.css'

import Global from '../../styles/global.module.css'

const getyear = () => {
    const date = new Date()
    return date.getFullYear()
}

function Footer() {
    return (
        <footer className={Classes.footer}>
            <div className={Global.container}>
                <small> Copyright &copy; {getyear()} Utkarsh Srivastava. All Rights Reserved</small>
            </div>
        </footer>
    )
}

export default Footer

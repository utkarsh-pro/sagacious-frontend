import React from 'react'
import ContactForm from '../../components/ContactForm'
import Global from '../../styles/global.module.css'
import Classes from './index.module.css'

function Contact() {
    return (
        <div className={`${Global.container} ${Classes.container}`}>
            <ContactForm />
        </div>
    )
}

export default Contact

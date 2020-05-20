import React from 'react'
import Classes from './index.module.css'

function ContactForm() {
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Submitted")
    }

    return (
        <div className={Classes.formContainer}>
            <div className={Classes.tag}>Contact Form</div>
            <form className={Classes.form} onSubmit={onSubmitHandler}>
                <label htmlFor="name" className={Classes.label}>Name</label>
                <input type="text" name="name" className={Classes.input} />

                <label htmlFor="email" className={Classes.label}>Email</label>
                <input type="email" name="email" className={Classes.input} />

                <label htmlFor="subject" className={Classes.label}>Subject</label>
                <input type="subject" name="text" className={Classes.input} />

                <label htmlFor="message" className={Classes.label}>Message</label>
                <textarea name="message" cols={30} rows={10} className={`${Classes.input} ${Classes.textbox}`} />

                <input type="submit" value="Submit" className={Classes.btn} />
            </form>
        </div>
    )
}

export default ContactForm

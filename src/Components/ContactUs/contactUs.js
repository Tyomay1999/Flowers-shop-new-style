import React from 'react'
import contactUsStyles from './contactUs.module.scss'
import contactUsImage from '../../Assets/images/contact-img.svg'

const ContactUs = () => {
    return (
        <section className={contactUsStyles.contact} id="contact">

            <h1 className={contactUsStyles.heading}> <span> contact </span> us </h1>

            <div className={contactUsStyles.row}>

                <form action="">
                    <input type="text" placeholder="name" className={contactUsStyles.box} />
                    <input type="email" placeholder="email" className={contactUsStyles.box} />
                    <input type="number" placeholder="number" className={contactUsStyles.box} />
                    <textarea name="" className={contactUsStyles.box} placeholder="message" id="" cols="30" rows="10" />
                    <input type="submit" value="send message" className={contactUsStyles.btn} />
                </form>

                <div className={contactUsStyles.image}>
                    <img src={contactUsImage} alt="contact us" />
                </div>

            </div>

        </section>
    )
}

export default ContactUs

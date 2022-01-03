import React, {useState} from 'react'
import contactUsStyles from './contactUs.module.scss'
import contactUsImage from '../../Assets/images/contact-img.svg'
import {handlerDebounce} from "../Common/functions";


const ContactUs = () => {
    const [customerMessage, setCustomerMessage] = useState(null)
    return (
        <section className={contactUsStyles.contact} id="contact">
            <h1 className={contactUsStyles.heading}><span> contact </span> us </h1>
            <div className={contactUsStyles.row}>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    // console.log(customerMessage)
                }} action="">
                    <input
                        type="text"
                        onChange={(e) => handlerDebounce(() => {
                            setCustomerMessage({...customerMessage, name: e.target.value})
                        })}
                        placeholder="name"
                        className={contactUsStyles.box}/>
                    <input type="email" onChange={(e) => handlerDebounce(() => {
                        setCustomerMessage({...customerMessage, email: e.target.value})
                    })}
                           placeholder="email" className={contactUsStyles.box}/>
                    <input type="number" placeholder="number" className={contactUsStyles.box}
                           onChange={(e) => handlerDebounce(() => {
                               setCustomerMessage({...customerMessage, phone: e.target.value})
                           })}/>
                    <textarea className={contactUsStyles.box} placeholder="message" id="" cols="30" rows="10"
                              onChange={(e) => handlerDebounce(() => {
                                  setCustomerMessage({...customerMessage, message: e.target.value})
                              })}/>
                    <input type="submit" value="send message" className={contactUsStyles.btn}/>
                </form>

                <div className={contactUsStyles.image}>
                    <img src={contactUsImage} alt="contact us"/>
                </div>

            </div>

        </section>
    )
}

export default ContactUs

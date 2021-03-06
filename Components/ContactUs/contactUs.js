import React, { useCallback, useState } from 'react'
import contactUsStyles from './contactUs.module.scss'
import contactUsImage from '../../public/Assets/images/contact-img.svg'
import { handlerDebounce } from "../Common/functions";
import { useDispatch } from "react-redux";
import { sendMessages, setMessage } from "../../Redux/Action/common.action";
import { isValidate } from "../Common/validation";
import { contact_us_section, messages } from "../Common/web-site-static-words";

const messageControl = ( dispatch, info ) => {
    if ( !info.name ) {
        dispatch( setMessage( messages.write_name ) )
        return "name"
    }
    if ( !info.email ) {
        dispatch( setMessage( messages.check_email ) )
        return 'email'
    }
    if ( !info.phone ) {
        dispatch( setMessage( messages.check_phone ) )
        return 'phone'
    }
    if ( !info.message ) {
        dispatch( setMessage( messages.messages_hint ) )
        return 'message'
    }
    return false
}
const customerMessageInitialState = { name: '', email: '', phone: '', message: '' }

const ContactUs = () => {
    const dispatch = useDispatch()
    const [ customerMessage, setCustomerMessage ] = useState( customerMessageInitialState )
    const onSubmit = useCallback( ( e, customerMessage, setCustomerMessage ) => {
        e.preventDefault()
        if ( !messageControl( dispatch, customerMessage ) ) {
            dispatch( sendMessages( customerMessage ) )
            dispatch( setMessage( messages.message_sent ) )
            setCustomerMessage( { ...customerMessageInitialState } )
        }
    }, [] )
    return (
        <section className={ contactUsStyles.contact } id="contact">
            <h1 className={ contactUsStyles.heading }>
                <span> {contact_us_section.heading_1} </span>
                {contact_us_section.heading_2}
            </h1>
            <div className={ contactUsStyles.row }>
                <form onSubmit={ ( e ) => onSubmit( e, customerMessage, setCustomerMessage ) } action="">
                    <input
                        type="text"
                        onChange={ ( e ) => handlerDebounce( () => {
                            setCustomerMessage( { ...customerMessage, name: e.target.value } )
                        } ) }
                        placeholder={ contact_us_section.name }
                        className={ contactUsStyles.box }/>
                    <input type="email" onChange={ ( e ) => {
                        if ( isValidate( 'email', e.target.value ) ) {
                            setCustomerMessage( { ...customerMessage, email: e.target.value } )
                        }
                    } }
                           placeholder={contact_us_section.email} className={ contactUsStyles.box }/>
                    <input type="number" placeholder={contact_us_section.number} className={ contactUsStyles.box }
                           onChange={ ( e ) => {
                               if ( isValidate( 'numbersOnly', e.target.value ) ) {
                                   setCustomerMessage( { ...customerMessage, phone: e.target.value } )
                               }
                           } }
                    />
                    <textarea className={ contactUsStyles.box } placeholder={contact_us_section.message} id="" cols="30" rows="10"
                              onChange={ ( e ) => handlerDebounce( () => {
                                  if ( e.target.value?.length > "please call me".length ) {
                                      setCustomerMessage( { ...customerMessage, message: e.target.value } )
                                  }
                              } ) }/>
                    <input type="submit" value={contact_us_section.send_message} className={ contactUsStyles.btn }/>
                </form>

                <div className={ contactUsStyles.image }>
                    <img src={ contactUsImage } alt="contact us"/>
                </div>

            </div>

        </section>
    )
}

export default ContactUs

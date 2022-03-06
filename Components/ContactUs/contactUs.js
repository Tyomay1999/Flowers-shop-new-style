import React, { useCallback, useState } from 'react'
import contactUsStyles from './contactUs.module.scss'
import contactUsImage from '../../public/Assets/images/contact-img.svg'
import { handlerDebounce } from "../Common/functions";
import { useDispatch } from "react-redux";
import { sendMessages, setMessage } from "../../Redux/Action/common.action";
import { isValidate } from "../Common/validation";

const messageControl = ( dispatch, info ) => {
    if ( !info.name ) {
        dispatch( setMessage( "Write your name" ) )
        return "name"
    }
    if ( !info.email ) {
        dispatch( setMessage( 'Check your email' ) )
        return 'email'
    }
    if ( !info.phone ) {
        dispatch( setMessage( "Check your phone number" ) )
        return 'phone'
    }
    if ( !info.message ) {
        dispatch( setMessage( "In message has needed more than 5 words" ) )
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
            dispatch( setMessage( "Your message was send" ) )
            setCustomerMessage( { ...customerMessageInitialState } )
        }
    }, [] )
    return (
        <section className={ contactUsStyles.contact } id="contact">
            <h1 className={ contactUsStyles.heading }><span> contact </span> us </h1>
            <div className={ contactUsStyles.row }>
                <form onSubmit={ ( e ) => onSubmit( e, customerMessage, setCustomerMessage ) } action="">
                    <input
                        type="text"
                        onChange={ ( e ) => handlerDebounce( () => {
                            setCustomerMessage( { ...customerMessage, name: e.target.value } )
                        } ) }
                        placeholder="name"
                        className={ contactUsStyles.box }/>
                    <input type="email" onChange={ ( e ) => {
                        if ( isValidate( 'email', e.target.value ) ) {
                            setCustomerMessage( { ...customerMessage, email: e.target.value } )
                        }
                    } }
                           placeholder="email" className={ contactUsStyles.box }/>
                    <input type="number" placeholder="number" className={ contactUsStyles.box }
                           onChange={ ( e ) => {
                               if ( isValidate( 'numbersOnly', e.target.value ) ) {
                                   setCustomerMessage( { ...customerMessage, phone: e.target.value } )
                               }
                           } }
                    />
                    <textarea className={ contactUsStyles.box } placeholder="message" id="" cols="30" rows="10"
                              onChange={ ( e ) => handlerDebounce( () => {
                                  if ( e.target.value.length > "please call me".length ) {
                                      setCustomerMessage( { ...customerMessage, message: e.target.value } )
                                  }
                              } ) }/>
                    <input type="submit" value="send message" className={ contactUsStyles.btn }/>
                </form>

                <div className={ contactUsStyles.image }>
                    <img src={ contactUsImage } alt="contact us"/>
                </div>

            </div>

        </section>
    )
}

export default ContactUs

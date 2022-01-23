import React, {useState} from 'react'
import shippingDetailsStyles from './shippingDetails.module.scss'
import {v4 as uuidv4} from 'uuid';
import {deliveryTime} from "./shippingDetailsFunctionality";
import {retry} from "@reduxjs/toolkit/query";
import {handlerDebounce} from "../Common/functions";

const handlerValueValidation = (type, value) => {
    switch (type) {
        case 'number':
            const numeralRegex = /\d{4}$/
            return numeralRegex.test(value)
        case 'letterOnly':
            const withoutNumberRegex = new RegExp(/[^\d]/g)
            return withoutNumberRegex.test(value)
        case 'email':
            const emailRegex = new RegExp(/[^\d]/g)
            return emailRegex.test(value)
        default:
            return false
    }
}
const handlerShippingDetails = (type, value, state, stateHook) => {
    switch (type) {
        case 'firstName':
            return stateHook({...state, firstName: value})
        case 'lastName':
            return stateHook({...state, lastName: value})
        case 'email':
            return stateHook({...state, email: value})
        case 'phone':
            return stateHook({...state, phone: value})
        case 'address':
            return stateHook({...state, address: value})
        case 'deliveryTime':
            return stateHook({...state, deliveryTime: value})
        case 'deliveryDate':
            return stateHook({...state, deliveryDate: value})
        default:
            return stateHook({...state, personalMessage: value})
    }
}

const handlerPaymentDetails = (type, value, state, stateHook) => {
    switch (type) {
        case 'cardNumberFirst':
            return stateHook({...state, cardNumberFirst: value})
        case 'cardNumberSecond':
            return stateHook({...state, cardNumberSecond: value})
        case 'cardNumberThird':
            return stateHook({...state, cardNumberThird: value})
        case 'cardNumberForth':
            return stateHook({...state, cardNumberForth: value})
        case 'cardHolderFirstName':
            return stateHook({...state, cardHolderFirstName: value})
        case 'cardHolderLastName':
            return stateHook({...state, cardHolderLastName: value})
        case 'expires':
            return stateHook({...state, expires: value})
        default:
            return stateHook({...state, cvv: value})
    }
}
const valueLengthHandler = (value, setErrorMessage) => {
    if (value.length === 4) {
        return console.log(true)
    }
    return console.log(false)
}
const cardNumbersError = 'Do not write longer than 4 characters and use only numbers'
const ShippingDetails = () => {
    const [errorMessage, setErrorMessage] = useState({type: '', message: ''})
    const [shippingDetails, setShippingDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: 'moscow',
        address: '',
        deliveryTime: '',
        deliveryDate: '',
        personalMessage: ''
    })
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumberFirst: '',
        cardNumberSecond: '',
        cardNumberThird: '',
        cardNumberForth: '',
        cardHolderFirstName: '',
        cardHolderLastName: '',
        expires: '',
        cvv: ''
    })

    console.log(errorMessage, '<----------------------errorMessage')
    return <div className={shippingDetailsStyles.main}>
        <div className={shippingDetailsStyles.shippingDetails}>
            <h1><i className="bi bi-truck"/>Shipping <span>Details</span></h1>
            <div className={shippingDetailsStyles.content}>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='text' placeholder=' '
                           defaultValue={shippingDetails.firstName}
                           id='firstName'
                           onChange={(e) =>
                               handlerShippingDetails('firstName', e.target.value, shippingDetails, setShippingDetails)
                           }
                    />
                    <label htmlFor='firstName'>First <span>Name*</span></label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='text' placeholder=' ' id='lastName'
                           defaultValue={shippingDetails.lastName}
                           onChange={(e) =>
                               handlerShippingDetails('lastName', e.target.value, shippingDetails, setShippingDetails)
                           }
                    />
                    <label htmlFor='lastName'>Last <span>Name</span></label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='email' placeholder=' ' id='Email'
                           defaultValue={shippingDetails.email}
                           onChange={(e) =>
                               handlerShippingDetails('email', e.target.value, shippingDetails, setShippingDetails)
                           }
                    />
                    <label htmlFor='Email'>Email <span>address</span></label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='number' placeholder=' ' id='phone'
                           defaultValue={shippingDetails.phone}
                           onChange={(e) =>
                               handlerShippingDetails('phone', e.target.value, shippingDetails, setShippingDetails)
                           }
                    />
                    <label htmlFor='phone'>Phone <span>*</span></label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='text' value='Moscow' disabled placeholder=' ' id='city'
                        // onChange={(e) =>
                        //     handlerShippingDetails('city',e.target.value,shippingDetails,setShippingDetails)
                        // }
                    />
                    <label htmlFor='city'>City <span>*</span></label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='text' placeholder=' ' id='Address'
                           defaultValue={shippingDetails.address}
                           onChange={(e) =>
                               handlerShippingDetails('address', e.target.value, shippingDetails, setShippingDetails)
                           }
                    />
                    <label htmlFor='Address'>Address <span>*</span></label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <label className={shippingDetailsStyles['custom-select']} htmlFor="styledSelect1">
                        <select id="styledSelect1" name="options"
                                defaultValue={shippingDetails.deliveryDate}
                                onChange={(e) =>
                                    handlerShippingDetails('deliveryDate', e.target.value, shippingDetails, setShippingDetails)
                                }
                        >
                            <option value="">
                                Date of Delivery
                            </option>
                            {
                                deliveryTime.map((date, index) => {
                                    return <option value={index} key={uuidv4()}>
                                        {date}
                                    </option>
                                })
                            }
                        </select>
                    </label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <label className={shippingDetailsStyles['custom-select']} htmlFor="styledSelect1">
                        <select id="styledSelect1" name="options"
                                defaultValue={shippingDetails.deliveryTime}
                                onChange={(e) =>
                                    handlerShippingDetails('deliveryTime', e.target.value, shippingDetails, setShippingDetails)
                                }
                        >
                            <option value="">
                                Time of Delivery
                            </option>
                            {
                                deliveryTime.map((time, index) => {
                                    return <option value={index} key={uuidv4()}>
                                        {time}
                                    </option>
                                })
                            }
                        </select>
                    </label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <p>0/250</p>
                    <textarea maxLength='250' placeholder=' ' id='message'
                              defaultValue={shippingDetails.personalMessage}
                              onChange={(e) =>
                                  handlerShippingDetails('personalMessage', e.target.value, shippingDetails, setShippingDetails)
                              }
                    />
                    <label className={shippingDetailsStyles.label} htmlFor='message'>Your
                        personal <span>message</span> on <span>card</span></label>
                </div>
            </div>
        </div>
        <div className={shippingDetailsStyles.paymentInfo}>
            <h1><i className="bi bi-credit-card-fill"/>Payment</h1>
            <div className={shippingDetailsStyles['credit-card-box']}>
                <div className={shippingDetailsStyles.flip}>
                    <div className={shippingDetailsStyles.front}>
                        <div className={shippingDetailsStyles.chip}/>
                        <div className={shippingDetailsStyles.logo}/>
                        <div className={shippingDetailsStyles.number}>
                            {`
                                ${paymentDetails.cardNumberFirst} 
                                ${paymentDetails.cardNumberSecond} 
                                ${paymentDetails.cardNumberThird} 
                                ${paymentDetails.cardNumberForth}
                            `}
                        </div>
                        <div className={shippingDetailsStyles['card-holder']}>
                            <label>Card holder</label>
                            <div>
                                {`${paymentDetails.cardHolderFirstName} ${paymentDetails.cardHolderLastName}`}
                            </div>
                        </div>
                        <div className={shippingDetailsStyles["card-expiration-date"]}>
                            <label>Expires</label>
                            <div>{paymentDetails.expires}</div>
                        </div>
                    </div>
                    <div className={shippingDetailsStyles.back}>
                        <div className={shippingDetailsStyles.strip}/>
                        <div className={shippingDetailsStyles.logo}/>
                        <div className={shippingDetailsStyles.ccv}>
                            <label>CCV</label>
                            <div>{paymentDetails.cvv}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={shippingDetailsStyles.cardContainer}>
                <h1>TOTAL<span>Payment</span>: 1000<span>$</span></h1>
                <div className={shippingDetailsStyles.cardNumbers}>
                    <p>Card <span>numbers</span>:</p>
                    <input type='number'
                           onChange={(e) => {
                               if (e.target.value.length === 4) {
                                   setErrorMessage({type: '', message: ''})
                                   return handlerPaymentDetails('cardNumberFirst', e.target.value, paymentDetails, setPaymentDetails)
                               }
                               return setErrorMessage({type: 'card numbers', message: cardNumbersError})
                           }}
                    />-
                    <input type='number'
                           onChange={(e) => {
                               if (e.target.value.length === 4) {
                                   setErrorMessage({type: '', message: ''})
                                   return handlerPaymentDetails('cardNumberSecond', e.target.value, paymentDetails, setPaymentDetails)
                               }
                               return setErrorMessage({type: 'card numbers', message: cardNumbersError})

                           }}
                    />-
                    <input type='number'
                           onChange={(e) => {
                               if (e.target.value.length === 4) {
                                   setErrorMessage({type: '', message: ''})
                                   return handlerPaymentDetails('cardNumberThird', e.target.value, paymentDetails, setPaymentDetails)
                               }
                               return setErrorMessage({type: 'card numbers', message: cardNumbersError})

                           }}
                    />-
                    <input type='number'
                           onChange={(e) => {
                               if (e.target.value.length === 4) {
                                   setErrorMessage({type: '', message: ''})
                                   return handlerPaymentDetails('cardNumberForth', e.target.value, paymentDetails, setPaymentDetails)
                               }
                               return setErrorMessage({type: 'card numbers', message: cardNumbersError})

                           }}
                    />
                </div>
                {
                    errorMessage.type === 'card numbers' &&
                    <p className={shippingDetailsStyles.errorMessage}>{errorMessage.message}</p>
                }
                <div className={shippingDetailsStyles.cardHolder}>
                    <div className={shippingDetailsStyles.wrapper}>
                        <input type='text' placeholder=' ' id='firstName'
                               onChange={(e) =>
                                   handlerPaymentDetails('cardHolderFirstName', e.target.value, paymentDetails, setPaymentDetails)
                               }
                        />
                        <label htmlFor='firstName'>First <span>Name*</span></label>
                    </div>
                    <div className={shippingDetailsStyles.wrapper}>
                        <input type='text' placeholder=' ' id='lastName'
                               onChange={(e) =>
                                   handlerPaymentDetails('cardHolderLastName', e.target.value, paymentDetails, setPaymentDetails)
                               }
                        />
                        <label htmlFor='lastName'>Last <span>Name*</span></label>
                    </div>
                </div>
                <div className={shippingDetailsStyles.cardExpires}>
                    <div className={shippingDetailsStyles.wrapper}>
                        <label className={shippingDetailsStyles['custom-select']} htmlFor="styledSelect1">
                            <select id="styledSelect1" name="options"
                                    onChange={(e) =>
                                        handlerPaymentDetails('expires', e.target.value, paymentDetails, setPaymentDetails)
                                    }
                            >
                                <option value="">
                                    Expires
                                </option>
                                {
                                    deliveryTime.map((elem, index) => {
                                        return <option value={index} key={uuidv4()}>
                                            {elem}
                                        </option>
                                    })
                                }
                            </select>
                        </label>
                    </div>
                    <div className={shippingDetailsStyles.wrapper}>
                        <input type='text' placeholder=' ' id='CVV'
                               onChange={(e) => {
                                   if (e.target.value.length === 3) {
                                       setErrorMessage({type: '',message: ''})
                                       return handlerPaymentDetails('cvv', e.target.value, paymentDetails, setPaymentDetails)
                                   }
                                   return setErrorMessage({type: 'cvv',message: 'cvv cannot be longer than 3 characters and only use numbers'})
                               }}
                        />
                        <label htmlFor='CVV'>CVV <span>*</span></label>
                    </div>
                </div>
                <button disabled={errorMessage.message}>Pay</button>
            </div>
        </div>
    </div>
}

export default ShippingDetails
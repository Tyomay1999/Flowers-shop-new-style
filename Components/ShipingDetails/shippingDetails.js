import React, {useEffect, useState} from 'react'
import shippingDetailsStyles from './shippingDetails.module.scss'
import {v4 as uuidv4} from 'uuid';
import {deliveryDate, deliveryTime, expiresDate} from "./shippingDetailsFunctionality";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {sendOrderThunk} from "../../Redux/Action/product.action";
import Loading from "../Common/Loading/loading";
import {shipping_details_section} from "../Common/web-site-static-words";


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

const handleOnInput = (e) => {
    let maxNum = 4;
    if (e.target.value.length > maxNum) {
        e.target.value = e.target.value.slice(0, maxNum);
    }
}
const cardNumbersError = 'Do not write longer than 4 characters and use only numbers'

const ShippingDetails = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state?.commonReducer.loading)
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
    const orderDetails = useSelector(state => state?.commonReducer.orderDetails)
    useEffect(() => {
        if (!orderDetails.length) {
            return router.push('/cart')
        }
    }, [])

    return <div className={shippingDetailsStyles.main}>
        {isLoading && <Loading/>}
        <div className={shippingDetailsStyles.shippingDetails}>
            <h1><i className="bi bi-truck"/>
                {shipping_details_section.heading_1}
                <span>{shipping_details_section.heading_2}</span>
            </h1>
            <div className={shippingDetailsStyles.content}>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='text' placeholder=' '
                           defaultValue={shippingDetails.firstName}
                           id='firstName'
                           onChange={(e) =>
                               handlerShippingDetails('firstName', e.target.value, shippingDetails, setShippingDetails)
                           }
                    />
                    <label htmlFor='firstName'>
                        {shipping_details_section.recipient_first_name}
                        <span>{shipping_details_section.name_word}*</span></label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='text' placeholder=' ' id='lastName'
                           defaultValue={shippingDetails.lastName}
                           onChange={(e) =>
                               handlerShippingDetails('lastName', e.target.value, shippingDetails, setShippingDetails)
                           }
                    />
                    <label htmlFor='lastName'>
                        {shipping_details_section.recipient_last_name}
                        <span>{shipping_details_section.name_word}</span>
                    </label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='email' placeholder=' ' id='Email'
                           defaultValue={shippingDetails.email}
                           onChange={(e) =>
                               handlerShippingDetails('email', e.target.value, shippingDetails, setShippingDetails)
                           }
                    />
                    <label htmlFor='Email'>
                        {shipping_details_section.your_email}
                        <span> {shipping_details_section.address_word}</span>
                    </label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='number' placeholder=' ' id='phone'
                           defaultValue={shippingDetails.phone}
                           onChange={(e) =>
                               handlerShippingDetails('phone', e.target.value, shippingDetails, setShippingDetails)
                           }
                    />
                    <label htmlFor='phone'>
                        {shipping_details_section.recipient}
                        <span> {shipping_details_section.phone_word}*</span>
                    </label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='text' value='Moscow' disabled placeholder=' ' id='city'
                        // onChange={(e) =>
                        //     handlerShippingDetails('city',e.target.value,shippingDetails,setShippingDetails)
                        // }
                    />
                    <label htmlFor='city'>{shipping_details_section.city_word} <span>*</span></label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='text' placeholder=' ' id='Address'
                           defaultValue={shippingDetails.address}
                           onChange={(e) =>
                               handlerShippingDetails('address', e.target.value, shippingDetails, setShippingDetails)
                           }
                    />
                    <label htmlFor='Address'>
                        {shipping_details_section.recipient}
                        <span> {shipping_details_section.address_word} *</span>
                    </label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <label className={shippingDetailsStyles['custom-select']} htmlFor="styledSelect1">
                        <select id="styledSelect1" name="options"
                                value={shippingDetails.deliveryDate}
                                onChange={(e) =>
                                    handlerShippingDetails('deliveryDate', e.target.value, shippingDetails, setShippingDetails)
                                }
                        >
                            <option value="">
                                {shipping_details_section.date_of_delivery}
                            </option>
                            {
                                deliveryDate().map(date => {
                                    return <option value={date} key={uuidv4()}>
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
                                value={shippingDetails.deliveryTime}
                                defaultValue={shippingDetails.deliveryTime}
                                onChange={(e) =>
                                    handlerShippingDetails('deliveryTime', e.target.value, shippingDetails, setShippingDetails)
                                }
                        >
                            <option value="">
                                {shipping_details_section.time_of_delivery}
                            </option>
                            {
                                deliveryTime('', shippingDetails.deliveryDate).map(time => {
                                    return <option value={time} key={uuidv4()}>
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
                    <label className={shippingDetailsStyles.label} htmlFor='message'>
                        {shipping_details_section.your_personal}
                        <span> {shipping_details_section.message_word}
                        </span> on <span> {shipping_details_section.card_word}</span>
                    </label>
                </div>
            </div>
        </div>
        <div className={shippingDetailsStyles.paymentInfo}>
            <h1><i className="bi bi-credit-card-fill"/>
                {shipping_details_section.payment}
            </h1>
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
                            <label>{shipping_details_section.card_holder}</label>
                            <div>
                                {`${paymentDetails.cardHolderFirstName} ${paymentDetails.cardHolderLastName}`}
                            </div>
                        </div>
                        <div className={shippingDetailsStyles["card-expiration-date"]}>
                            <label>{shipping_details_section.expires}</label>
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
                <h1>TOTAL<span> Payment</span>: {orderDetails[0]}<span>$</span></h1>
                <form className={shippingDetailsStyles.cardNumbers}>
                    <p>
                        {shipping_details_section.card_word}
                        <span> {shipping_details_section.number_word}</span>:</p>
                    <input type='number'
                           onInput={handleOnInput}
                           onChange={(e) => {
                               if (e.target.value.length < 5) {
                                   setErrorMessage({type: '', message: ''})
                                   return handlerPaymentDetails('cardNumberFirst', e.target.value, paymentDetails, setPaymentDetails)
                               }
                               return setErrorMessage({type: 'card numbers', message: cardNumbersError})
                           }}
                    />-
                    <input type='number'
                           onInput={handleOnInput}
                           onChange={(e) => {
                               if (e.target.value.length < 5) {
                                   setErrorMessage({type: '', message: ''})
                                   return handlerPaymentDetails('cardNumberSecond', e.target.value, paymentDetails, setPaymentDetails)
                               }
                               return setErrorMessage({type: 'card numbers', message: cardNumbersError})

                           }}
                    />-
                    <input type='number'
                           onInput={handleOnInput}
                           onChange={(e) => {
                               if (e.target.value.length === 4) {
                                   setErrorMessage({type: '', message: ''})
                                   return handlerPaymentDetails('cardNumberThird', e.target.value, paymentDetails, setPaymentDetails)
                               }
                               return setErrorMessage({type: 'card numbers', message: cardNumbersError})

                           }}
                    />-
                    <input type='number'
                           onInput={handleOnInput}
                           onChange={(e) => {
                               if (e.target.value.length < 5) {
                                   setErrorMessage({type: '', message: ''})
                                   return handlerPaymentDetails('cardNumberForth', e.target.value, paymentDetails, setPaymentDetails)
                               }
                               return setErrorMessage({type: 'card numbers', message: cardNumbersError})

                           }}
                    />
                </form>
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
                        <label htmlFor='firstName'>
                            {shipping_details_section.first_word_of_name}
                            <span>{shipping_details_section.name_word}*</span></label>
                    </div>
                    <div className={shippingDetailsStyles.wrapper}>
                        <input type='text' placeholder=' ' id='lastName'
                               onChange={(e) =>
                                   handlerPaymentDetails('cardHolderLastName', e.target.value, paymentDetails, setPaymentDetails)
                               }
                        />
                        <label htmlFor='lastName'>
                            {shipping_details_section.surname_word}
                            <span>{shipping_details_section.name_word}*</span></label>
                    </div>
                </div>
                <div className={shippingDetailsStyles.cardExpires}>
                    <div className={shippingDetailsStyles.wrapper}>
                        <label className={shippingDetailsStyles['custom-select']} htmlFor="styledSelect1">
                            <select id="styledSelect1" name="options"
                                    value={paymentDetails.expires}
                                    onChange={(e) => {
                                        handlerPaymentDetails('expires', e.target.value, paymentDetails, setPaymentDetails)
                                    }
                                    }
                            >
                                <option value="">
                                    {shipping_details_section.expires}
                                </option>
                                {
                                    expiresDate().map(elem => {
                                        return <option value={elem} key={uuidv4()}>
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
                                       setErrorMessage({type: '', message: ''})
                                       return handlerPaymentDetails('cvv', e.target.value, paymentDetails, setPaymentDetails)
                                   }
                                   return setErrorMessage({
                                       type: 'cvv',
                                       message: 'cvv cannot be longer than 3 characters and only use numbers'
                                   })
                               }}
                        />
                        <label htmlFor='CVV'>CVV <span>*</span></label>
                    </div>
                </div>
                <button onClick={() => dispatch(sendOrderThunk(shippingDetails, orderDetails, paymentDetails))}
                    // disabled={
                    //     !shippingDetails.firstName || !shippingDetails.phone || !shippingDetails.address
                    //     || !shippingDetails.deliveryTime || !shippingDetails.deliveryDate || !paymentDetails.cardNumberFirst
                    //     || !paymentDetails.cardNumberSecond || !paymentDetails.cardNumberThird || !paymentDetails.cardNumberForth
                    //     || !paymentDetails.cardHolderFirstName || !paymentDetails.cardHolderLastName || !paymentDetails.expires
                    //     || !paymentDetails.cvv || !orderDetails[0]
                    // }
                >{shipping_details_section.pay}
                </button>
            </div>
        </div>
    </div>
}

export default ShippingDetails
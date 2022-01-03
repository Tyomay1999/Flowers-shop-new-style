import React from 'react'
import shippingDetails from './shippingDetails.module.scss'
import {v4 as uuidv4} from 'uuid';

const workTime = [
    '09:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00',
    '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00',
    '17:00-18:00', '18:00-19:00', '19:00-20:00', '20:00-21:00'
]

const ShippingDetails = () => {
    return <div className={shippingDetails.main}>
        <div className={shippingDetails.shippingDetails}>
            <h1><i className="bi bi-truck"/>Shipping <span>Details</span></h1>
            <div className={shippingDetails.content}>
                <div className={shippingDetails.wrapper}>
                    <input type='text' placeholder=' ' id='firstName'/>
                    <label htmlFor='firstName'>First <span>Name*</span></label>
                </div>
                <div className={shippingDetails.wrapper}>
                    <input type='text' placeholder=' ' id='lastName'/>
                    <label htmlFor='lastName'>Last <span>Name</span></label>
                </div>
                <div className={shippingDetails.wrapper}>
                    <input type='email' placeholder=' ' id='Email'/>
                    <label htmlFor='Email'>Email <span>address</span></label>
                </div>
                <div className={shippingDetails.wrapper}>
                    <input type='number' placeholder=' ' id='phone'/>
                    <label htmlFor='phone'>Phone <span>*</span></label>
                </div>
                <div className={shippingDetails.wrapper}>
                    <input type='text' value='Moscow' disabled placeholder=' ' id='city'/>
                    <label htmlFor='city'>City <span>*</span></label>
                </div>
                <div className={shippingDetails.wrapper}>
                    <input type='text' placeholder=' ' id='Address'/>
                    <label htmlFor='Address'>Address <span>*</span></label>
                </div>
                <div className={shippingDetails.wrapper}>
                    <label className={shippingDetails['custom-select']} htmlFor="styledSelect1">
                        <select id="styledSelect1" name="options">
                            <option value="">
                                Date of Delivery
                            </option>
                            {
                                workTime.map((elem, index) => {
                                    return <option value={index} key={uuidv4()}>
                                        {elem}
                                    </option>
                                })
                            }
                        </select>
                    </label>
                </div>
                <div className={shippingDetails.wrapper}>
                    <label className={shippingDetails['custom-select']} htmlFor="styledSelect1">
                        <select id="styledSelect1" name="options">
                            <option value="">
                                Time of Delivery
                            </option>
                            {
                                workTime.map((elem, index) => {
                                    return <option value={index} key={uuidv4()}>
                                        {elem}
                                    </option>
                                })
                            }
                        </select>
                    </label>
                </div>
                <div className={shippingDetails.wrapper}>
                    <p>0/250</p>
                    <textarea maxLength='250' placeholder=' ' id='message'/>
                    <label className={shippingDetails.label} htmlFor='message'>Your
                        personal <span>message</span> on <span>card</span></label>
                </div>
            </div>
        </div>
        <div className={shippingDetails.paymentInfo}>
            <h1><i className="bi bi-credit-card-fill"/>Payment</h1>
            <div className={shippingDetails['credit-card-box']}>
                <div className={shippingDetails.flip}>
                    <div className={shippingDetails.front}>
                        <div className={shippingDetails.chip}/>
                        <div className={shippingDetails.logo}/>
                        <div className={shippingDetails.number}>1123 2311 3123 1233</div>
                        <div className={shippingDetails['card-holder']}>
                            <label>Card holder</label>
                            <div/>Artyom Bordulanyuk
                        </div>
                        <div className={shippingDetails["card-expiration-date"]}>
                            <label>Expires</label>
                            <div/>22/44
                        </div>
                    </div>
                    <div className={shippingDetails.back}>
                        <div className={shippingDetails.strip}/>
                        <div className={shippingDetails.logo}/>
                        <div className={shippingDetails.ccv}>
                            <label>CCV</label>
                            <div/>2222
                        </div>
                    </div>
                </div>
            </div>
            <div className={shippingDetails.cardContainer}>
                <div className={shippingDetails.cardNumbers}>
                    <p>Card <span>numbers</span>:</p>
                    <input type='number' min={2} max={4} />-
                    <input type='number' min={2} max={4} />-
                    <input type='number' min={2} max={4} />-
                    <input type='number' min={2} max={4} />
                </div>
                <div className={shippingDetails.cardHolder}>
                    <div className={shippingDetails.wrapper}>
                        <input type='text' placeholder=' ' id='firstName'/>
                        <label htmlFor='firstName'>First <span>Name*</span></label>
                    </div>
                    <div className={shippingDetails.wrapper}>
                        <input type='text' placeholder=' ' id='lastName'/>
                        <label htmlFor='lastName'>Last <span>Name*</span></label>
                    </div>
                </div>
                <div className={shippingDetails.cardExpires}>
                    <div className={shippingDetails.wrapper}>
                        <label className={shippingDetails['custom-select']} htmlFor="styledSelect1">
                            <select id="styledSelect1" name="options">
                                <option value="">
                                    Time of Delivery
                                </option>
                                {
                                    workTime.map((elem, index) => {
                                        return <option value={index} key={uuidv4()}>
                                            {elem}
                                        </option>
                                    })
                                }
                            </select>
                        </label>
                    </div>
                    <div className={shippingDetails.wrapper}>
                        <input type='text' placeholder=' ' id='CVV'/>
                        <label htmlFor='CVV'>CVV <span>*</span></label>
                    </div>
                </div>
                <button>Pay</button>
            </div>
        </div>
    </div>
}

export default ShippingDetails
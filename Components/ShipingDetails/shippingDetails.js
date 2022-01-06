import React, {useState} from 'react'
import shippingDetailsStyles from './shippingDetails.module.scss'
import {v4 as uuidv4} from 'uuid';
import {deliveryTime} from "./shippingDetailsFunctionality";



const ShippingDetails = () => {
    const [shippingDetails,setShippingDetails] = useState({
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
    return <div className={shippingDetailsStyles.main}>
        <div className={shippingDetailsStyles.shippingDetails}>
            <h1><i className="bi bi-truck"/>Shipping <span>Details</span></h1>
            <div className={shippingDetailsStyles.content}>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='text' placeholder=' ' id='firstName'/>
                    <label htmlFor='firstName'>First <span>Name*</span></label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='text' placeholder=' ' id='lastName'/>
                    <label htmlFor='lastName'>Last <span>Name</span></label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='email' placeholder=' ' id='Email'/>
                    <label htmlFor='Email'>Email <span>address</span></label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='number' placeholder=' ' id='phone'/>
                    <label htmlFor='phone'>Phone <span>*</span></label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='text' value='Moscow' disabled placeholder=' ' id='city'/>
                    <label htmlFor='city'>City <span>*</span></label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <input type='text' placeholder=' ' id='Address'/>
                    <label htmlFor='Address'>Address <span>*</span></label>
                </div>
                <div className={shippingDetailsStyles.wrapper}>
                    <label className={shippingDetailsStyles['custom-select']} htmlFor="styledSelect1">
                        <select id="styledSelect1" name="options">
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
                        <select id="styledSelect1" name="options">
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
                    <textarea maxLength='250' placeholder=' ' id='message'/>
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
                        <div className={shippingDetailsStyles.number}>1123 2311 3123 1233</div>
                        <div className={shippingDetailsStyles['card-holder']}>
                            <label>Card holder</label>
                            <div/>Artyom Bordulanyuk
                        </div>
                        <div className={shippingDetailsStyles["card-expiration-date"]}>
                            <label>Expires</label>
                            <div/>22/44
                        </div>
                    </div>
                    <div className={shippingDetailsStyles.back}>
                        <div className={shippingDetailsStyles.strip}/>
                        <div className={shippingDetailsStyles.logo}/>
                        <div className={shippingDetailsStyles.ccv}>
                            <label>CCV</label>
                            <div/>2222
                        </div>
                    </div>
                </div>
            </div>
            <div className={shippingDetailsStyles.cardContainer}>
                <h1>TOTAL<span>Payment</span>: 1000<span>$</span></h1>
                <div className={shippingDetailsStyles.cardNumbers}>
                    <p>Card <span>numbers</span>:</p>
                    <input type='number' min={2} max={4} />-
                    <input type='number' min={2} max={4} />-
                    <input type='number' min={2} max={4} />-
                    <input type='number' min={2} max={4} />
                </div>
                <div className={shippingDetailsStyles.cardHolder}>
                    <div className={shippingDetailsStyles.wrapper}>
                        <input type='text' placeholder=' ' id='firstName'/>
                        <label htmlFor='firstName'>First <span>Name*</span></label>
                    </div>
                    <div className={shippingDetailsStyles.wrapper}>
                        <input type='text' placeholder=' ' id='lastName'/>
                        <label htmlFor='lastName'>Last <span>Name*</span></label>
                    </div>
                </div>
                <div className={shippingDetailsStyles.cardExpires}>
                    <div className={shippingDetailsStyles.wrapper}>
                        <label className={shippingDetailsStyles['custom-select']} htmlFor="styledSelect1">
                            <select id="styledSelect1" name="options">
                                <option value="">
                                    Time of Delivery
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
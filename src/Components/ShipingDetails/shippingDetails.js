import React from 'react'
import shippingDetails from './shippingDetails.module.scss'

const ShippingDetails = () => {
    return <div className={shippingDetails.main}>
        <div className={shippingDetails.shippingDetails}>
            <h1><i className="bi bi-truck"/>Shipping <span>Details</span></h1>
            <div className={shippingDetails.content}>
                <div className={shippingDetails.wrapper}>
                    <input placeholder=' ' id='firstName'/>
                    <label htmlFor='firstName'>First <span>Name</span></label>
                </div>
                <div className={shippingDetails.wrapper}>
                    <input placeholder=' ' id='lastName'/>
                    <label htmlFor='lastname'>Last <span>Name</span></label>
                </div>
                <div className={shippingDetails.wrapper}>
                    <input placeholder=' ' id='Email'/>
                    <label htmlFor='Email'>Email <span>address</span></label>
                </div>
                <div className={shippingDetails.wrapper}>
                    <input placeholder=' ' id='Address'/>
                    <label htmlFor='Address'>Address <span>Name</span></label>
                </div>
            </div>
        </div>
        <div className={shippingDetails.paymentInfo}>
            <h1><i className="bi bi-credit-card-fill"/>Payment</h1>

        </div>
    </div>
}

export default ShippingDetails
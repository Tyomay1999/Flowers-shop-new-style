import React from 'react'
import listStyles from './list.module.scss'
import Products from './../Products/products';
import AboutUs from './../AboutUs/aboutUs';
import Greetings from '../Greetings/greetings';
import ContactUs from '../ContactUs/contactUs';
const List = () => {
    return (
        <div className={listStyles.main}>
            <Greetings />
            <AboutUs />
            <Products />
            <ContactUs />
        </div>
    )
}

export default List

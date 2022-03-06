import React from 'react'
import listStyles from './list.module.scss'
import NewProducts from './../newProducts/products';
import AboutUs from './../AboutUs/aboutUs';
import Greetings from '../Greetings/greetings';
import ContactUs from '../ContactUs/contactUs';

const List = () => {
    return (
        <div className={ listStyles.main }>
            <Greetings/>
            <NewProducts/>
            <AboutUs/>
            <ContactUs/>
        </div>
    )
}

export default List

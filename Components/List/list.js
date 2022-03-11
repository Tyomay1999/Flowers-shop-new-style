import React, {useMemo} from 'react'
import listStyles from './list.module.scss'
import NewProducts from './../newProducts/products';
import AboutUs from './../AboutUs/aboutUs';
import Greetings from '../Greetings/greetings';
// import ContactUs from '../ContactUs/contactUs';
import dynamic from "next/dynamic";
import useInView from "react-cool-inview";

const ContactUs = dynamic(() => import("../ContactUs/contactUs"))

const List = () => {
    const { observe, inView } = useInView();
    const memorize_new_products = useMemo(() => {
        return <NewProducts />
    },[])

    return (
        <div className={ listStyles.main }>
            <Greetings/>
            {/*<NewProducts/>*/}
            {
                memorize_new_products
            }
            <AboutUs/>
            <div ref={observe}>
                {inView && <ContactUs/>}
            </div>
        </div>
    )
}

export default List

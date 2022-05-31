import React from 'react'
import headerStyles from './header.module.scss'
import logo from '../../public/Assets/images/logo.png'
import Link from 'next/link'
import Message from "../Common/Message/message";
import {header_section} from "../Common/web-site-static-words";


const Header = () => {
    return (
        <header className={ headerStyles.main }>
            <input type="checkbox" name="" id="toggle" className={ headerStyles.toggler }/>
            <label htmlFor="toggle" className='bi bi-list'/>

            <Link href="/">
                <div className={ headerStyles.logo }>
                    <img src={ logo } width='100' height='100' alt='logo'/>
                </div>
            </Link>

            <nav className={ headerStyles.navbar }>
                <Link href="/#greetings">{header_section.home}</Link>
                <Link href="/#about">{header_section.about}</Link>
                <Link href="/all-flowers">{header_section.products}</Link>
                {/*<Link href="/#newProducts">{header_section.new_products}</Link>*/}
                <Link href="/#contact">{header_section.contact}</Link>
            </nav>
            <Message/>
            <div className={ headerStyles.icons }>
                <Link href='/cart'><i className="bi bi-cart"/></Link>
            </div>
        </header>
    )
}

export default Header

import React from 'react'
import headerStyles from './header.module.scss'
import logo from '../../public/Assets/images/logo.png'
import Link from 'next/link'
import Message from "../Common/Message/message";


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
                <Link href="/#greetings">home</Link>
                <Link href="/#about">about</Link>
                <Link href="/all-flowers">products</Link>
                <Link href="/#newProducts">New products</Link>
                <Link href="/#contact">contact</Link>
            </nav>
            <Message/>
            <div className={ headerStyles.icons }>
                <Link href='/cart'><i className="bi bi-cart"/></Link>
            </div>
        </header>
    )
}

export default Header

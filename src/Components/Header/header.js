import React from 'react'
import headerStyles from './header.module.scss'
import logo from '../../Assets/images/logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className={headerStyles.main}>
            <input type="checkbox" name="" id="toggler" className={headerStyles.toggler} />
            <label htmlFor="toggler" className='bi bi-list'/>

            <Link to="/" className={headerStyles.logo}>
                <img src={logo} alt='logo' />
            </Link>

            <nav className={headerStyles.navbar}>
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#products">products</a>
                <a href="#review">review</a>
                <a href="#contact">contact</a>
            </nav>

            <div className={headerStyles.icons}>
                <i className="bi bi-heart" />
                <Link to='/cart'><i className="bi bi-cart" /></Link>
                <i className="bi bi-person" />
            </div>
        </header>
    )
}

export default Header

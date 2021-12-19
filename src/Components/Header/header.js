import React from 'react'
import headerStyles from './header.module.scss'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className={headerStyles.main}>
            <input type="checkbox" name="" id="toggler" className={headerStyles.toggler} />
            <label htmlFor="toggler" className='bi bi-list'></label>

            <Link to="/" className={headerStyles.logo}>Logo<span>.</span></Link>

            <nav className={headerStyles.navbar}>
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#products">products</a>
                <a href="#review">review</a>
                <a href="#contact">contact</a>
            </nav>

            <div className={headerStyles.icons}>
                <i className="bi bi-heart"></i>
                <i className="bi bi-cart"></i>
                <i className="bi bi-person"></i>
            </div>
        </header>
    )
}

export default Header

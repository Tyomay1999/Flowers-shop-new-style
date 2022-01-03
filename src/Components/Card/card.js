import React from 'react'
import cardStyles from './card.module.scss'
const Card = ({ product }) => {
    const { discount, photo, name, price, lastPrice,isNew } = product
    return (
        <div className={cardStyles.box}>
            <span className={cardStyles.discount}>-{discount}%</span>
            {
                isNew && <span className={cardStyles.type}>new</span>
            }
            <div className={cardStyles.image}>
                <img src={photo} alt="" />
                <div className={cardStyles.icons}>
                    <i className="bi bi-heart"></i>
                    <a href="#ss" className="cart-btn">add to cart</a>
                    <i className="bi bi-share-fill"></i>
                </div>
            </div>
            <div className={cardStyles.content}>
                <h3>{name}</h3>
                <div className={cardStyles.price}> ${price} <span>${lastPrice}</span> </div>
            </div>
        </div>
    )
}

export default Card

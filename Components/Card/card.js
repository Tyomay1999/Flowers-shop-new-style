import React from 'react'
import cardStyles from './card.module.scss'
import { useDispatch } from "react-redux";
import { selectProduct } from "../../Redux/Reducers/product.reducer";
import { useRouter } from "next/router";
import { addProduct } from "../../Redux/Reducers/cart.reducer";
export const handlerCart = (e,product,dispatch) => {
    e.stopPropagation();
    dispatch(addProduct(product))
}
export const chooseProduct = (product,dispatch) => {
    dispatch(selectProduct(product))
}
const Card = ({ product }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { discount, photo, name, price, lastPrice,isNew } = product
    return (
        <div onClick={() => {
            router.push('/flower/slug')
            chooseProduct(product,dispatch)
        }} className={cardStyles.box}>
            <span className={cardStyles.discount}>-{discount}%</span>
            {
                isNew && <span className={cardStyles.type}>new</span>
            }
            <div className={cardStyles.image}>
                <img src={photo} alt="" />
                <div className={cardStyles.icons}>
                    {/*<i className="bi bi-heart" />*/}
                    <i onClick={(e) => handlerCart(e,product,dispatch)} className="bi bi-cart-plus" />
                    <i className="bi bi-share-fill" />
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

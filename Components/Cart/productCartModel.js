import React, { useState } from 'react'
import cartStyles from './cart.module.scss'
import { useDispatch } from "react-redux";
import { changeProductQuantity, removeFlowerInCart } from "../../Redux/Action/product.action";

const increment = (changerHook) => {
    changerHook(prevCount => prevCount + 1)
}

const decrement = (changerHook) => {
    changerHook(prevCount => prevCount - 1)
}

export const handlerTrash = (product,dispatch) => {
    let localStorageCart = JSON.parse(window.localStorage.getItem('cart'))
    localStorageCart = localStorageCart?.filter(flower => flower !== product.id)
    window.localStorage.setItem("cart", JSON.stringify(localStorageCart?.length ? [...localStorageCart] : []))
    dispatch(removeFlowerInCart(product.id))
}

export const handlerBuy = (product,dispatch) => {
    dispatch(removeFlowerInCart(product.id))
}

const ProductModel = ({product,position}) => {
    const dispatch = useDispatch()
    return <>
        <img src={product.photo} alt='flower1'/>
        <div className={cartStyles.productInfo}>
            <h1 className={cartStyles.flowerName}>{product.name}</h1>
            <h2 className={cartStyles.productPrice}>{product.price * product.quantity}<span>$</span></h2>
            <div className={cartStyles.productCount}>
                <button disabled={product.quantity <= 1} onClick={() => dispatch(changeProductQuantity(product.quantity - 1, position))}>-</button>
                <p>{product.quantity}</p>
                <button onClick={() => dispatch(changeProductQuantity(product.quantity + 1, position))}>+</button>
            </div>
            <button onClick={() => handlerBuy(product,dispatch)} className={cartStyles.buy}>Buy</button>
            <button
                onClick={() => handlerTrash(product,dispatch)}
                className={cartStyles.removeProduct}><i className="bi bi-trash"/></button>
        </div>
    </>
}

export default ProductModel;
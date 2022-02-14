import React, { useState } from 'react'
import cartStyles from './cart.module.scss'
import { useDispatch } from "react-redux";
import { removeFlowerInCart } from "../../Redux/Action/product.action";

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

const ProductModel = ({product}) => {
    const dispatch = useDispatch()
    const [count, changeCount] = useState(1)
    return <>
        <img src={product.photo} alt='flower1'/>
        <div className={cartStyles.productInfo}>
            <h1 className={cartStyles.flowerName}>{product.name}</h1>
            <h2 className={cartStyles.productPrice}>{product.price * count}<span>$</span></h2>
            <div className={cartStyles.productCount}>
                <button disabled={count <= 1} onClick={() => decrement(changeCount)}>-</button>
                <p>{count}</p>
                <button onClick={() => increment(changeCount)}>+</button>
            </div>
            <button onClick={() => handlerBuy(product,dispatch)} className={cartStyles.buy}>Buy</button>
            <button
                onClick={() => handlerTrash(product,dispatch)}
                className={cartStyles.removeProduct}><i className="bi bi-trash"/></button>
        </div>
    </>
}

export default ProductModel;
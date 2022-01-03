import React, {useState} from 'react'
import cartStyles from './cart.module.scss'
import {cardLocalImages} from "../../Assets/images/imagesContrller";

const increment = (changerHook) => {
    changerHook(prevCount => prevCount + 1)
}

const decrement = (changerHook) => {
    changerHook(prevCount => prevCount - 1)
}

const ProductModel = () => {
    const [count, changeCount] = useState(1)
    return <>
        <img src={cardLocalImages.product1} alt='flower1'/>
        <div className={cartStyles.productInfo}>
            <h1 className={cartStyles.flowerName}>Flower name</h1>
            <h2 className={cartStyles.productPrice}>{100 * count}<span>$</span></h2>
            <div className={cartStyles.productCount}>
                <button disabled={count <= 1} onClick={() => decrement(changeCount)}>-</button>
                <p>{count}</p>
                <button onClick={() => increment(changeCount)}>+</button>
            </div>
            <button className={cartStyles.buy}>Buy</button>
            <button className={cartStyles.removeProduct}><i className="bi bi-trash"/></button>
        </div>
    </>
}

export default ProductModel;
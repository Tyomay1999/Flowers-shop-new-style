import React from 'react'
import productStyle from './product.module.scss'
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
// import Card from "../Card/card";

const handlerBuy = (router) => {
    router.push('/cart')
}

const Product = () => {
    const router = useRouter()
    const product = useSelector( state => state?.productReducer.selectedProduct )
    console.log( product )
    return <div className={ productStyle.main }>
        <div className={productStyle.images}>
            <img src={ product?.photo } alt={ product?.name }/>
            <h2 className={productStyle.discount}>{product?.discount && `${product?.discount}%`}</h2>
        </div>
        <div className={ productStyle.productInfo }>
            <h1>{ product?.name }</h1>
            <h2 className={productStyle.status}>{product?.isNew && 'New'}</h2>
            <h4>Pr<span>ice:</span> {product?.price}</h4>
            <h6>la<span>st</span> Pr<span>ice:</span> {product?.lastPrice}$</h6>
            <button className={ productStyle.buy } onClick={ () => handlerBuy(router) }>Buy now</button>
        </div>
    </div>
}

export default Product
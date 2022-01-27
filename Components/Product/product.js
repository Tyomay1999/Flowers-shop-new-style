import React from 'react'
import productStyle from './product.module.scss'
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import {shareHandler} from "../Common/share";
import {v4 as uuidv4} from 'uuid'
// import Card from "../Card/card";

const handlerBuy = (router) => {
    router.push('/cart')
}
const handlerTagClick = (router) => {
    router.push('/cart')
}
const Product = () => {
    const router = useRouter()
    const product = useSelector(state => state?.productReducer.selectedProduct)
    console.log(product)
    return <div className={productStyle.main}>
        <div className={productStyle.images}>
            <img src={product?.photo} alt={product?.name}/>
            {
                product?.isNew && <h2 className={productStyle.status}>New</h2>
            }
            {
                product?.discount && <h2 className={productStyle.discount}>{product?.discount}%</h2>
            }
            {
                shareHandler('Hunts', productStyle, 30, true)
            }
        </div>
        <div className={productStyle.productInfo}>
            <h1>{product?.name}</h1>
            <p className={productStyle.aboutFlower}>{ product?.aboutFlower }</p>
            <h4>Pr<span>ice:</span> {product?.price}</h4>
            <h6>la<span>st</span> Pr<span>ice:</span> {product?.lastPrice}$</h6>
            <ul>
                <li>Tags :</li>
                {
                    product?.tags?.map(tag => <li key={uuidv4()}>
                        {tag}
                    </li>)
                }
            </ul>
            {/*TODO add share in this block*/}
            <button className={productStyle.buy} onClick={() => handlerBuy(router)}>Buy now</button>
        </div>
    </div>
}

export default Product
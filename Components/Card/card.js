import React, {useEffect, useRef, useState} from 'react'
import cardStyles from './card.module.scss'
import {useDispatch} from "react-redux";
import {selectProduct} from "../../Redux/Reducers/product.reducer";
import {useRouter} from "next/router";
import {addProduct} from "../../Redux/Reducers/cart.reducer";
import { shareHandler } from "../Common/share";


export const handlerCart = (e, product, dispatch) => {
    e.stopPropagation();
    dispatch(addProduct(product))
}
export const chooseProduct = (product, dispatch) => {
    dispatch(selectProduct(product))
}
const Card = ({product}) => {
    const [isLoading, setIsLoading] = useState(true)
    const cardRef = useRef(null )
    const router = useRouter()
    const dispatch = useDispatch()
    const {discount, photo, name, price, lastPrice, isNew} = product
    const shareUrl = `http://localhost:3000/flower/${product.slug}`
    useEffect(() => {
        if(cardRef.current){
            cardRef.current.onload = () => setIsLoading(false)
        }
    },[])
    return (
        <div
           onClick={() => {
            router.push(`/flower/${product.slug}`)
            chooseProduct(product, dispatch)
        }} className={isLoading ? cardStyles.lazyLoaderContainer : cardStyles.box}>
            <span className={isLoading ? cardStyles.isLoading : cardStyles.discount}>-{discount}%</span>
            {
                isNew && <span className={isLoading ? cardStyles.isLoading : cardStyles.type}>new</span>
            }
            {/*<div className={isLoading ? cardStyles.lazyImageLoader : cardStyles.image}>*/}
            <div className={cardStyles.image}>
                <img  ref={cardRef} src={photo} alt=""/>
                <div onClick={(e) => e.stopPropagation()} className={cardStyles.icons}>
                    {/*<i className="bi bi-heart" />*/}
                    <i onClick={(e) => handlerCart(e, product, dispatch)}
                       className={`bi bi-cart-${product.inCart ? 'check' : 'plus'}`}/>
                    {/*<i className="bi bi-cart-check" />*/}
                    {/*TODO change url and share design with responsive*/}
                    <div className={cardStyles.shareBlock}>
                        <i className="bi bi-share-fill"/>
                        {
                            shareHandler(shareUrl,cardStyles,30,true)
                        }
                    </div>
                </div>
            </div>
            <div className={isLoading ? cardStyles.isLoading : cardStyles.content}>
                <h3>{name}</h3>
                <div className={cardStyles.price}> ${price} <span>${lastPrice}</span></div>
            </div>
        </div>
    )
}
//TODO review jsx
export default Card

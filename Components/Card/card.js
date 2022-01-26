import React from 'react'
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
    const router = useRouter()
    const dispatch = useDispatch()
    const {discount, photo, name, price, lastPrice, isNew} = product
    const shareUrl = `http://localhost:3000/flower/${product.slug}`
    return (
        <div onClick={() => {
            router.push(`/flower/${product.slug}`)
            chooseProduct(product, dispatch)
        }} className={cardStyles.box}>
            <span className={cardStyles.discount}>-{discount}%</span>
            {
                isNew && <span className={cardStyles.type}>new</span>
            }
            <div className={cardStyles.image}>
                <img src={photo} alt=""/>
                <div onClick={(e) => e.stopPropagation()} className={cardStyles.icons}>
                    {/*<i className="bi bi-heart" />*/}
                    <i onClick={(e) => handlerCart(e, product, dispatch)}
                       className={`bi bi-cart-${product.inCart ? 'check' : 'plus'}`}/>
                    {/*<i className="bi bi-cart-check" />*/}
                    {/*TODO change url and share design */}
                    <div className={cardStyles.shareBlock}>
                        <i className="bi bi-share-fill"/>
                        {
                            shareHandler(shareUrl,cardStyles,30,true)
                        }
                    </div>
                </div>
            </div>
            <div className={cardStyles.content}>
                <h3>{name}</h3>
                <div className={cardStyles.price}> ${price} <span>${lastPrice}</span></div>
            </div>
        </div>
    )
}
//TODO review jsx
export default Card

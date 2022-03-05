import React, { useCallback, useEffect } from 'react'
import cartStyles from './cart.module.scss'
import ProductModel from "./productCartModel";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {useRouter} from "next/router";
import { getCartProductsThunk } from "../../Redux/Action/product.action";
import { setOrderDetails } from "../../Redux/Action/common.action";

const handlerTotalPrice = (productsArray) => {
    let totalPrice = 0;
    productsArray.forEach(product => {
        totalPrice += (product.price * product.quantity)
    })
    return Math.floor(totalPrice)
}
const handlerConfirm = (cartProducts,totalPrice,dispatch,router) => {
    const orderDetails = [totalPrice]
    cartProducts.forEach(product => {
        orderDetails.push({id: product.id, quantity: product.quantity})
    })
    dispatch(setOrderDetails(orderDetails))
    router.push('/checkout')
}
const Cart = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    let cartProducts = useSelector(state => state?.productReducer.cartProducts)
    useEffect(() => {
        //loading true or lazy loading
        dispatch(getCartProductsThunk(window.localStorage.getItem('cart')))
    },[])
    useEffect(() => {
        cartProducts = cartProducts.map(product => product.quantity = 1)// TODO move this in back
    },[cartProducts.length])
    const totalPrice = useCallback(() => handlerTotalPrice(cartProducts), [cartProducts])()
    return (
        <div className={cartStyles.main}>
            <div className={cartProducts.length ? cartStyles.blockLeft : cartStyles.blockLeftEmpty}>
                {
                    cartProducts.length ? cartProducts.map((product,index) => {
                            return <div key={uuidv4()} className={cartStyles.wrapper}>
                                <ProductModel position={index} product={product}/>
                            </div>
                        })
                        : <div className={cartStyles.emptyBlock}>
                            <h1>Your cart <span>is empty</span></h1>
                            <button onClick={() => router.push('/all-flowers') } >Go pick <span>flowers</span></button>
                        </div>
                }
            </div>
            {
                cartProducts[0] && <div className={cartStyles.blockRight}>
                    <div className={cartStyles.blockRightChild}>
                        <h1>Total <span>Price</span></h1>
                        {
                            cartProducts.map(product => {
                                return <p key={uuidv4()}  style={{borderBottom: "1px solid pink"}}>{ product.quantity } x {product.name} ... {product.price * product.quantity}<span>$</span></p>
                            })
                        }
                        <div className={cartStyles.total}>
                            <p>TOT<span>AL:</span> { totalPrice }<span>$</span></p>
                                <button onClick={() => handlerConfirm(cartProducts,totalPrice,dispatch,router)}>Confirm</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart
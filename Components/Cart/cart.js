import React, { useCallback, useEffect } from 'react'
import cartStyles from './cart.module.scss'
import ProductModel from "./productCartModel";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { getCartProductsThunk } from "../../Redux/Action/product.action";
import { setOrderDetails } from "../../Redux/Action/common.action";
import Loading from "../Common/Loading/loading";
import {cart_section, currency} from "../Common/web-site-static-words";

const handlerTotalPrice = ( productsArray ) => {
    let totalPrice = 0;
    productsArray.forEach( product => {
        totalPrice += ( product.price * product.quantity )
    } )
    return Math.floor( totalPrice )
}
const handlerConfirm = ( cartProducts, totalPrice, dispatch, router ) => {
    const orderDetails = [ totalPrice ]
    cartProducts.forEach( product => {
        orderDetails.push( { flower: product, quantity: product.quantity } )
    } )
    dispatch( setOrderDetails( orderDetails ) )
    router.push( '/checkout' )
}
const Cart = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    let cartProducts = useSelector( state => state?.productReducer.cartProducts )
    const isLoading = useSelector( state => state?.commonReducer.loading )
    useEffect( () => {
        dispatch( getCartProductsThunk( window.localStorage.getItem( 'cart' ) ) )
    }, [] )
    const totalPrice = useCallback( () => handlerTotalPrice( cartProducts ), [ cartProducts ] )()
    return (
        <div className={ cartStyles.main }>
            <div className={ cartProducts?.length ? cartStyles.blockLeft : cartStyles.blockLeftEmpty }>
                {
                    cartProducts?.length ? cartProducts.map( ( product, index ) => {
                            return <div key={ uuidv4() } className={ cartStyles.wrapper }>
                                <ProductModel position={ index } product={ product }/>
                            </div>
                        } )
                        : <div className={ cartStyles.emptyBlock }>
                            <h1>
                                { cart_section.empty_message_part_1}
                                <span>{ cart_section.empty_message_part_2}</span>
                            </h1>
                            <button onClick={ () => router.push( '/all-flowers' ) }>
                                {cart_section.button_part_1}
                                <span>{cart_section.button_part_2}</span>
                            </button>
                        </div>
                }
            </div>
            { isLoading && <Loading/> }
            {
                cartProducts[ 0 ] && <div className={ cartStyles.blockRight }>
                    <div className={ cartStyles.blockRightChild }>
                        <h1>{cart_section.total} <span>{cart_section.price}</span>{currency}</h1>
                        {
                            cartProducts.map( product => {
                                return <p key={ uuidv4() }
                                          style={ { borderBottom: "1px solid pink" } }>{ product.quantity } x { product.name } ... { product.price * product.quantity }<span>{currency}</span>
                                </p>
                            } )
                        }
                        <div className={ cartStyles.total }>
                            <p>{cart_section.total}<span> {cart_section.price}:</span> { totalPrice }<span>{currency}</span></p>
                            <button
                                onClick={ () => handlerConfirm( cartProducts, totalPrice, dispatch, router ) }>
                                {cart_section.confirm}
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart
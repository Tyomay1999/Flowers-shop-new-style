import React, {useEffect} from 'react'
import cartStyles from './cart.module.scss'
import Link from 'next/link'
import ProductModel from "./productCartModel";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {useRouter} from "next/router";
import {getCartProductsThunk} from "../../Redux/Reducers/cart.reducer";

const Cart = () => {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state?.cartReducer.cartProducts)
    useEffect(() => {
        //loading true or lazy loading
        dispatch(getCartProductsThunk(window.localStorage.getItem('cart')))
    },[])
    console.log(cartProducts,'<--------------------cartProducts')
    const router = useRouter()
    return (
        <div className={cartStyles.main}>
            <div className={cartProducts.length ? cartStyles.blockLeft : cartStyles.blockLeftEmpty}>
                {
                    cartProducts.length ? cartProducts.map(product => {
                            return <div key={uuidv4()} className={cartStyles.wrapper}>
                                <ProductModel product={product}/>
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
                                return <p>1 x {product.name}({product.price}$) ... {product.price * 1}<span>$</span></p>
                            })
                        }
                        <div className={cartStyles.total}>
                            <p>TOT<span>AL:</span> 800<span>$</span></p>
                            <Link href='/checkout'>
                                <button>Confirm</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart
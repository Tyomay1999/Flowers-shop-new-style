import React from 'react'
import cartStyles from './cart.module.scss'
import Link from 'next/link'
import ProductModel from "./productCartModel";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Cart = ( { history } ) => {
    const dipatch = useDispatch()
    const cartProducts = useSelector( state => state?.cartReducer.cartProducts )
    return (
        <div className={ cartStyles.main }>
            <div className={ cartStyles.blockLeft }>
                {
                    cartProducts?.map( product => {
                        return <div key={uuidv4()} className={ cartStyles.wrapper }>
                            <ProductModel product={product}/>
                        </div>
                    } )
                }
            </div>
            <div className={ cartStyles.blockRight }>
                <div className={ cartStyles.blockRightChild }>
                    <h1>Total <span>Price</span></h1>
                    {
                        cartProducts.map(product => {
                            return <p>1 x {product.name}({ product.price }$) ... {product.price * 1}<span>$</span></p>
                        })
                    }
                    <div className={ cartStyles.total }>
                        <p>TOT<span>AL:</span> 800<span>$</span></p>
                        <Link href='/checkout'>
                            <button>Confirm</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
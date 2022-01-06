import React from 'react'
import cartStyles from './cart.module.scss'
import Link from 'next/link'
import ProductModel from "./productCartModel";

const Cart = ({history}) => {
    return (
        <div className={cartStyles.main}>
            <div className={cartStyles.blockLeft}>
                <div className={cartStyles.wrapper}>
                    <ProductModel/>
                </div>
            </div>
            <div className={cartStyles.blockRight}>
                <div className={cartStyles.blockRightChild}>
                    <h1>Total <span>Price</span></h1>
                    <p>1 x flower1(100$) ... 100<span>$</span></p>
                    <p>1 x flower1(100$) ... 100<span>$</span></p>
                    <div className={cartStyles.total}>
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
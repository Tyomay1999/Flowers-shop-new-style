import React, { useEffect, useState } from 'react'
import productStyle from './product.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { shareHandler } from "../Common/share";
import { v4 as uuidv4 } from 'uuid'
import { handlerCart } from "../Card/card";
import { back_url } from "../../pages/api/sampleApi";
import Loading from "../Common/Loading/loading";

const handlerBuy = ( router ) => {
    router.push( '/cart' )
}

const Product = ( { product } ) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const isLoading = useSelector( state => state?.commonReducer.loading )
    const [ isFlowerInCart, setFlowerInCart ] = useState( false )
    useEffect( () => {
        let flowerInCart = JSON.parse( window.localStorage.getItem( 'cart' ) )?.filter( flowerId => flowerId === product?.id )
        setFlowerInCart( flowerInCart.length ? true : false )
    }, [ product ] )
    return <div className={ productStyle.main }>
        <div className={ productStyle.images }>
            <img src={ `${ back_url }/${ product?.photo }` } alt={ product?.name }/>
            {
                product?.isNew ? <h2 className={ productStyle.status }>New</h2> : null
            }
            {
                product?.discount ? <h2 className={ productStyle.discount }>-{ product?.discount }%</h2> : null
            }
            {
                shareHandler( `http://localhost:8080${ router.asPath }`, productStyle, 30, true, dispatch )
            }
        </div>
        { isLoading && <Loading/> }
        <div className={ productStyle.productInfo }>
            <h1>{ product?.name }</h1>
            <p className={ productStyle.aboutFlower }>{ product?.aboutFlower }</p>
            <h4>Pr<span>ice:</span> { product?.price }</h4>
            <h6>la<span>st</span> Pr<span>ice:</span> { product?.lastPrice }$</h6>
            <ul>
                <li>Tags :</li>
                {
                    product?.tags?.map( tag => <li key={ uuidv4() }>
                        { tag }
                    </li> )
                }
            </ul>
            <button className={ productStyle.buy } onClick={ () => handlerBuy( router ) }>Buy now</button>
            <button className={ productStyle.addToCart }
                    onClick={ ( e ) => handlerCart( e, product, dispatch, setFlowerInCart, isFlowerInCart ) }><i
                className={ `bi bi-cart-${ isFlowerInCart ? 'check' : 'plus' }` }/></button>
        </div>
    </div>
}

export default Product
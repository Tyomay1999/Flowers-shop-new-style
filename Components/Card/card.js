import React, { useEffect, useRef, useState } from 'react'
import cardStyles from './card.module.scss'
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { shareHandler } from "../Common/share";
import { selectProduct } from "../../Redux/Action/product.action";
import { back_url, front_url } from "../../pages/api/sampleApi";
import { setMessage } from "../../Redux/Action/common.action";
import { messages } from "../Common/web-site-static-words";


export const handlerCart = ( e, product, dispatch, setFlowerInCart, isFlowerInCart ) => {
    e.stopPropagation();
    if ( isFlowerInCart ) {//delete
        let localStorageCart = JSON.parse( window.localStorage.getItem( 'cart' ) )
        localStorageCart = localStorageCart?.filter( flower => flower !== product.id )
        window.localStorage.setItem( "cart", JSON.stringify( localStorageCart?.length ? [ ...localStorageCart ] : [] ) )
        dispatch( setMessage( messages.removed_from_cart ) )
    } else {
        if ( !window.localStorage.getItem( "cart" ) ) {//create
            window.localStorage.setItem( "cart", JSON.stringify( [ product.id ] ) )
            dispatch( setMessage( messages.added_to_cart ) )
        } else {//add
            const localStorageCart = JSON.parse( window.localStorage.getItem( 'cart' ) )
            window.localStorage.setItem( "cart", JSON.stringify( [ ...localStorageCart, product.id ] ) )
        }
        dispatch( setMessage( messages.added_to_cart ) )
    }
    setFlowerInCart( !isFlowerInCart )
}
export const chooseProduct = ( product, dispatch ) => {
    dispatch( selectProduct( product ) )
}
const Card = ( { product } ) => {
    const [ isLoading, setIsLoading ] = useState( true )
    const [ isFlowerInCart, setFlower ] = useState( false )
    const cardRef = useRef( null )
    const router = useRouter()
    const dispatch = useDispatch()
    const { discount, photo, name, price, lastPrice, isNew } = product
    useEffect( () => {
        let flowerInCart = JSON.parse( window.localStorage.getItem( 'cart' ) )?.filter( flowerId => flowerId === product?.id )
        setFlower( flowerInCart.length ? true : false )
    }, [ product ] )
    const shareUrl = `${ front_url }/flower/${ product.slug }`
    useEffect( () => {
        if ( cardRef.current ) {
            cardRef.current.onload = () => setIsLoading( false )
        }
        return () => {
            setIsLoading( false )
        }
    }, [] )
    return (
        <div
            onClick={ () => {
                chooseProduct( product, dispatch )
                router.push( {
                    pathname: `/flower/${ product.slug }`,
                } )
            } } className={ isLoading ? cardStyles.lazyLoaderContainer : cardStyles.box }>
            { discount ? <span
                className={ isLoading ? cardStyles.isLoading : cardStyles.discount }>-{ discount }%</span> : null }
            {
                isNew && <span className={ isLoading ? cardStyles.isLoading : cardStyles.type }>new</span>
            }
            <div className={ cardStyles.image }>
                <img ref={ cardRef } src={ `${ back_url }/${ photo }` } alt={ product.name }/>
                <div onClick={ ( e ) => e.stopPropagation() } className={ cardStyles.icons }>
                    {/*<i className="bi bi-heart" />*/ }
                    <i onClick={ ( e ) => handlerCart( e, product, dispatch, setFlower, isFlowerInCart ) }
                       className={ `bi bi-cart-${ isFlowerInCart ? 'check' : 'plus' }` }/>
                    <div className={ cardStyles.shareBlock }>
                        <i className="bi bi-share-fill"/>
                        {
                            shareHandler( shareUrl, cardStyles, 30, true, dispatch )
                        }
                    </div>
                </div>
            </div>
            <div className={ isLoading ? cardStyles.isLoading : cardStyles.content }>
                <h3>{ name }</h3>
                <div className={ cardStyles.price }> ${ price } { lastPrice ? <span>${ lastPrice }</span> : null }</div>
            </div>
        </div>
    )
}
export default Card

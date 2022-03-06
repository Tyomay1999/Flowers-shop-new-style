import React, { useCallback, useEffect } from 'react'
import Card from '../Card/card'
import productsStyles from './products.module.scss'
import cardStyles from '../Card/card.module.scss'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { getNewFlowersThunk } from "../../Redux/Action/product.action";
import Loading from "../Common/Loading/loading";

const NewProducts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector( state => state?.commonReducer.loading )
    const newFlowers = useCallback( dispatch => {
        dispatch( getNewFlowersThunk() )
    }, [] )
    const newProducts = useSelector( state => state?.productReducer.newProducts )
    useEffect( () => {
        newFlowers( dispatch )
    }, [] )
    return (
        <div className={ productsStyles.main } id='newProducts'>
            { isLoading && <Loading/> }
            <h1 className={ productsStyles.heading }> new <span>products</span></h1>

            <div className={ productsStyles.boxContainer }>
                {
                    newProducts?.map( ( elem, index ) => {
                        return <div key={ uuidv4() } className={ cardStyles.box }>
                            <Card product={ elem }/>
                        </div>
                    } )
                }
            </div>
        </div>
    )
}

export default NewProducts

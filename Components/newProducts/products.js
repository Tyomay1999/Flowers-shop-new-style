import React, { useCallback, useEffect } from 'react'
import Card from '../Card/card'
import productsStyles from './products.module.scss'
import cardStyles from '../Card/card.module.scss'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { getNewFlowersThunk } from "../../Redux/Action/product.action";
import Loading from "../Common/Loading/loading";
import Pagination from "../Common/Pagination/pagination";
import {new_products_section} from "../Common/web-site-static-words";

const NewProducts = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector( state => state?.commonReducer.loading )
    const page = useSelector(state => state?.commonReducer.page)
    const newProducts = useSelector( state => state?.productReducer.newProducts )

    const newFlowers = useCallback( dispatch => {
        dispatch( getNewFlowersThunk(page) )
    }, [page] )
    useEffect( () => {
        newFlowers( dispatch )
    }, [page] )
    return (
        <div className={ productsStyles.main } id='newProducts'>
            { isLoading && <Loading/> }
            <h1 className={ productsStyles.heading }>
                {new_products_section.heading_1}
                <span> {new_products_section.heading_2}</span>
            </h1>
            <div className={ productsStyles.boxContainer }>
                {
                    newProducts?.map( ( elem, index ) => {
                        return <div key={ uuidv4() } className={ cardStyles.box }>
                            <Card product={ elem }/>
                        </div>
                    } )
                }
            </div>
            {
                props.withoutPagination ? null :
                <div className={productsStyles.pagination}>
                <Pagination/>
            </div>
            }
        </div>
    )
}

export default NewProducts

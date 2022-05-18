import React, { useEffect } from 'react'
import similarProductsStyles from './similarProduct.module.scss'
import Card from "../../Card/card";
import { v4 as uuidv4 } from "uuid";
import cardStyles from "../../Card/card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSimilarProductThunk } from "../../../Redux/Action/product.action";
import Loading from "../Loading/loading";
import allProductsStyles from "../../AllProducts/allProducts.module.scss";
import Pagination from "../Pagination/pagination";
import {similar_products_section} from "../web-site-static-words";

const SimilarProduct = ( { categories } ) => {
    const dispatch = useDispatch()
    const similarProduct = useSelector( state => state?.productReducer.similarProduct )
    const isLoading = useSelector( state => state?.commonReducer.loading )
    const page = useSelector(state => state?.commonReducer.page)

    useEffect( () => {
        dispatch( getSimilarProductThunk( categories,page ) )
    }, [ categories?.length,page ] )


    return <div className={ similarProductsStyles.main }>
        <h1 className={ similarProductsStyles.heading }>
            {similar_products_section.heading_1}
            <span> {similar_products_section.heading_2}</span>
        </h1>
        <div className={ similarProductsStyles.similarProducts }>
            { isLoading && <Loading/> }
            {
                similarProduct?.map( elem => {
                    return <div key={ uuidv4() } className={ cardStyles.box }>
                        <Card product={ elem }/>
                    </div>
                } )
            }
        </div>
        <div className={similarProductsStyles.pagination}>
            <Pagination/>
        </div>
    </div>
}

export default SimilarProduct
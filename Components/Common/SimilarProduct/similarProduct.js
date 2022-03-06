import React, { useEffect } from 'react'
import similarProductsStyles from './similarProduct.module.scss'
import Card from "../../Card/card";
// import { similarProducts } from "../../newProducts/config";
import { v4 as uuidv4 } from "uuid";
import cardStyles from "../../Card/card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSimilarProductThunk } from "../../../Redux/Action/product.action";
import Loading from "../Loading/loading";

const SimilarProduct = ( { categories } ) => {
    const dispatch = useDispatch()
    const similarProduct = useSelector( state => state?.productReducer.similarProduct )
    const isLoading = useSelector( state => state?.commonReducer.loading )

    useEffect( () => {
        dispatch( getSimilarProductThunk( categories ) )
    }, [ categories.length ] )


    return <div className={ similarProductsStyles.main }>
        <h1 className={ similarProductsStyles.heading }> Similar <span>products</span></h1>
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
    </div>
}

export default SimilarProduct
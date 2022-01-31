import React, {useState} from 'react'
import allProductsStyles from './allProducts.module.scss'
import Search from "../Common/Search/search";
import {filterCloseFunction, filterOpenFunction} from "./function";
import SimilarProduct from "../Common/SimilarProduct/similarProduct";
import Card from "../Card/card";
import { newProducts } from "../newProducts/config";

const AllProducts = (props) => {
    const [isOpen, openFilter] = useState(false)
    return (
        <div onClick={() => openFilter(false)} className={allProductsStyles.main}>
            {/*<Search witCategories={false}/>*/}
            <div className={allProductsStyles.allProductsContainer}>
                {/*<SimilarProduct />*/}
                {
                    props.products?.map(product => {
                        return <Card product={product} />
                    })
                }
                {
                    isOpen ? filterOpenFunction(openFilter) : filterCloseFunction(openFilter)
                }
            </div>
        </div>
    )
}

export default AllProducts;
import React, {useState} from 'react'
import allProductsStyles from './allProducts.module.scss'
import Search from "../Common/Search/search";
import {filterCloseFunction, filterOpenFunction} from "./function";

const AllProducts = () => {
    const [isOpen, openFilter] = useState(false)
    return (
        <div onClick={() => openFilter(false)} className={allProductsStyles.main}>
            <Search witCategories={true}/>
            <div className={allProductsStyles.allProductsContainer}>
                {
                    isOpen ? filterOpenFunction(openFilter) : filterCloseFunction(openFilter)
                }
            </div>
        </div>
    )
}

export default AllProducts;
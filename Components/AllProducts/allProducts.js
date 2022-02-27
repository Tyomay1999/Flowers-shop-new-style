import React, { useEffect, useState } from 'react'
import allProductsStyles from './allProducts.module.scss'
import Search from "../Common/Search/search";
import {filterCloseFunction, filterOpenFunction} from "./function";
import SimilarProduct from "../Common/SimilarProduct/similarProduct";
import Card from "../Card/card";
import { newProducts } from "../newProducts/config";
import { useDispatch } from "react-redux";
import { getAllFlowersThunk } from "../../Redux/Action/product.action";
import {v4 as uuidv4} from "uuid";


const AllProducts = (props) => {
    const dispatch = useDispatch()
    const [isOpen, openFilter] = useState(false)
    console.log(props)
    return (
        <div onClick={() => openFilter(false)} className={allProductsStyles.main}>
            <Search witCategories={false}/>
            <div className={allProductsStyles.allProductsContainer}>
                {
                    props.products?.map(product => {
                        return <div key={uuidv4()}><Card product={product} /></div>
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
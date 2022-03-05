import React, { useEffect, useState } from 'react'
import allProductsStyles from './allProducts.module.scss'
import Search from "../Common/Search/search";
import {filterCloseFunction, filterOpenFunction} from "./function";
import Card from "../Card/card";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesThunk, getProductByCategory } from "../../Redux/Action/product.action";
import {v4 as uuidv4} from "uuid";
//TODO set loading

const handlerProductData = async (selectedCategory,dispatch) => {
    console.log(selectedCategory)
    let category = null
    if(!!window !== 'undefined' && !selectedCategory.id){
        category =  window.localStorage.getItem('category') ? JSON.parse(window.localStorage.getItem('category'))
            : null
    }
    if(selectedCategory.id){
        window.localStorage.setItem('category', JSON.stringify(selectedCategory))
    }
    await dispatch(getProductByCategory(selectedCategory))
}

const AllProducts = (props) => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state?.productReducer.categories)
    const products = useSelector(state => state?.productReducer.allProducts)
    const [isOpen, openFilter] = useState(false)
    useEffect(() => {
        dispatch(getCategoriesThunk())
    },[])
    return (
        <div onClick={() => openFilter(false)} className={allProductsStyles.main}>
            <Search witCategories={false}/>
            <div className={allProductsStyles.allProductsContainer}>
                {
                    products.map(product => {
                        return <div className={allProductsStyles.box} key={uuidv4()}><Card product={product} /></div>
                    })
                }
                {
                    isOpen ? filterOpenFunction(openFilter,categories,handlerProductData, dispatch) : filterCloseFunction(openFilter)
                }
            </div>
        </div>
    )
}

export default AllProducts;
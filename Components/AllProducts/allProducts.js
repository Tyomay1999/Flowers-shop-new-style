import React, { useEffect, useState } from 'react'
import allProductsStyles from './allProducts.module.scss'
import Search from "../Common/Search/search";
import { filterCloseFunction, filterOpenFunction } from "./function";
import Card from "../Card/card";
import { useDispatch, useSelector } from "react-redux";
import {getAllProductsThunk, getCategoriesThunk, getProductByCategory} from "../../Redux/Action/product.action";
import { v4 as uuidv4 } from "uuid";
import Loading from "../Common/Loading/loading";
import Pagination from "../Common/Pagination/pagination";

const handlerProductData = async ( selectedCategory, dispatch ) => {
    let category = null
    if ( !!window !== 'undefined' && !selectedCategory.id ) {
        category = window.localStorage.getItem( 'category' ) ? JSON.parse( window.localStorage.getItem( 'category' ) )
            : null
    }
    if ( selectedCategory.id ) {
        window.localStorage.setItem( 'category', JSON.stringify( selectedCategory ) )
    }
    await dispatch( getProductByCategory( selectedCategory ) )
}

const AllProducts = (  ) => {
    const dispatch = useDispatch()
    const categories = useSelector( state => state?.productReducer.categories )
    const products = useSelector( state => state?.productReducer.allProducts )
    const isLoading = useSelector( state => state?.commonReducer.loading )
    const page = useSelector(state => state?.commonReducer.page)

    const [ isOpen, openFilter ] = useState( false )
    console.log(products, '<---------------------products')
    useEffect( () => {
        dispatch( getCategoriesThunk() )
    }, [] )
    useEffect(() => {
        dispatch(getAllProductsThunk(page))
    } ,[page])
    return (
        <div onClick={ () => openFilter( false ) } className={ allProductsStyles.main }>
            <Search witCategories={ false }/>
            { isLoading && <Loading/> }
            <div className={ allProductsStyles.allProductsContainer }>
                {
                    products.map( product => {
                        return <div className={ allProductsStyles.box } key={ uuidv4() }><Card product={ product }/>
                        </div>
                    } )
                }
                {
                    isOpen ? filterOpenFunction( openFilter, categories, handlerProductData, dispatch ) : filterCloseFunction( openFilter )
                }
            </div>
            <div className={allProductsStyles.pagination}>
                <Pagination/>
            </div>
        </div>
    )
}

export default AllProducts;
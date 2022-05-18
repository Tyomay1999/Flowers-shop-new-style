import React, {useEffect, useMemo, useState} from 'react'
import allProductsStyles from './allProducts.module.scss'
import Search from "../Common/Search/search";
import {filterCloseFunction, filterOpenFunction} from "./function";
import Card from "../Card/card";
import {useDispatch, useSelector} from "react-redux";
import {getAllProductsThunk, getCategoriesThunk} from "../../Redux/Action/product.action";
import {v4 as uuidv4} from "uuid";
import Loading from "../Common/Loading/loading";
import Pagination from "../Common/Pagination/pagination";
import NewProducts from "../newProducts/products";
import {minMaxPrice} from "../Common/web-site-static-words";


const AllProducts = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state?.productReducer.categories)
    const products = useSelector(state => state?.productReducer.allProducts)
    const isLoading = useSelector(state => state?.commonReducer.loading)
    const page = useSelector(state => state?.commonReducer.page)
    const [isOpen, openFilter] = useState(false)
    const [category, chooseCategory] = useState({id: 0})
    const [prices, changePrise] = useState([minMaxPrice.min, minMaxPrice.max])

    useEffect(() => {
        dispatch(getCategoriesThunk())
    }, [])

    useEffect(() => {
        dispatch(getAllProductsThunk(page, category.id, prices))
    }, [page, category.id])

    const memorized_products = useMemo(() => {
        return products.map(product => {
            return <div className={allProductsStyles.box} key={uuidv4()}>
                <Card product={product}/>
            </div>
        })
    }, [products])
    const memorized_filter_block = useMemo(() => {
        return isOpen ? filterOpenFunction(openFilter, categories, chooseCategory, dispatch, prices, changePrise, page, category.id) : filterCloseFunction(openFilter)
    }, [isOpen, categories, prices,category.id])
    const memorized_pagination = useMemo(() => {
        return <Pagination/>
    }, [])

    return (
        <div onClick={() => openFilter(false)} className={allProductsStyles.main}>
            <Search witCategories={false}/>
            {isLoading && <Loading/>}
            {
                products?.length ?
                    <div className={allProductsStyles.allProductsContainer}>
                        {
                            memorized_products
                        }
                        {
                            memorized_filter_block
                        }
                    </div>
                    : <div className={allProductsStyles.notFound}>
                        <p>Nothing found for <span>your request</span></p>
                    </div>
            }
            {
                products?.length ? <div className={allProductsStyles.pagination}>
                        {
                            memorized_pagination
                        }
                    </div>
                    : <NewProducts withoutPagination={true}/>
            }
        </div>
    )
}

export default AllProducts;
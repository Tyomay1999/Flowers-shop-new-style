import React, {useState} from 'react'
import allProductsStyles from './allProducts.module.scss'
import Search from "../Common/Search/search";

const AllProducts = () => {
    const [isOpen, openFilter] = useState(false)
    return (
        <div onClick={() => openFilter(false)} className={allProductsStyles.main}>
            <Search witCategories={true}/>
            <div className={allProductsStyles.allProductsContainer}>
                AllProducts
                {
                    isOpen ?
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className={allProductsStyles.filterWrapper}
                        >
                            <div onClick={() => openFilter(false)} className={allProductsStyles.closeFilter}>
                                <i className="bi bi-x-lg" />
                            </div>
                            <h1>Fil<span>ter </span> <span><i className="bi bi-filter"/></span></h1>
                        </div>
                        :
                        <div
                            onClick={(e) => {
                                e.stopPropagation()
                                openFilter(true)
                            }}
                            className={allProductsStyles.filterContainer}>
                            <i className="bi bi-sliders"/>
                        </div>
                }
            </div>
        </div>
    )
}

export default AllProducts;
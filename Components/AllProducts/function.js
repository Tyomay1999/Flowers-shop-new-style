import React from 'react'
import allProductsStyles from "./allProducts.module.scss";
import { v4 as uuidv4 } from "uuid";

export const filterOpenFunction = ( openFilter, categories, handlerProductData, dispatch ) => {
    return <div
        onClick={ ( e ) => e.stopPropagation() }
        className={ allProductsStyles.filterWrapper }
    >
        <div onClick={ () => openFilter( false ) } className={ allProductsStyles.closeFilter }>
            <i className="bi bi-x-lg"/>
        </div>
        <h1>Fil<span>ter </span> <span><i className="bi bi-filter"/></span></h1>
        <div className={ allProductsStyles.content }>
            <div className={ allProductsStyles.filterByPrice }>
                <div className={ allProductsStyles.wrapper }>
                    <input defaultValue={ 0 } type='number' placeholder=' ' id='in'/>
                    <label htmlFor='in'>In</label>
                </div>
                <span>-</span>
                <div className={ allProductsStyles.wrapper }>
                    <input type='number' placeholder=' ' id='to'/>
                    <label htmlFor='to'>To</label>
                </div>
            </div>
            <ul className={ allProductsStyles.categoriesBlock }>
                {
                    categories.map( category => {
                        if ( category?.flower_ids?.length ) {
                            return <li
                                onClick={ async () => {
                                    await handlerProductData( category, dispatch )
                                }
                                }
                                key={ uuidv4() }>
                                { category?.name }
                                <span>({ category?.flower_ids?.length })</span>
                            </li>
                        }
                        return null
                    } )
                }
            </ul>
        </div>
        <button>Conf<span>irm</span></button>
    </div>
}

export const filterCloseFunction = ( openFilter ) => {
    return <div
        onClick={ ( e ) => {
            e.stopPropagation()
            openFilter( true )
        } }
        className={ allProductsStyles.filterContainer }>
        <i className="bi bi-sliders"/>
    </div>
}
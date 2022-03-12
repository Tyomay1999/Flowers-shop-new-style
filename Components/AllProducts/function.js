import React from 'react'
import allProductsStyles from "./allProducts.module.scss";
import { v4 as uuidv4 } from "uuid";
import {getAllProductsThunk} from "../../Redux/Action/product.action";
import {handlerDebounce} from "../Common/functions";
import { common_words, messages, minMaxPrice } from "../Common/web-site-static-words";
import { changePage, setMessage } from "../../Redux/Action/common.action";
//TODO set max and min size on price's inputs
export const filterOpenFunction = ( openFilter, categories, chooseCategory,dispatch,prices, changePrise,page,categoryId ) => {
    return <div
        onClick={ ( e ) => e.stopPropagation() }
        className={ allProductsStyles.filterWrapper }
    >
        <div onClick={ () => openFilter( false ) } className={ allProductsStyles.closeFilter }>
            <i className="bi bi-x-lg"/>
        </div>
        <div
            onClick={() => {
                chooseCategory({id: 0})
                changePrise([minMaxPrice.min,minMaxPrice.max])
                dispatch(changePage(1))
                dispatch( setMessage( messages.filtering_removed ) )
            }}
            className={allProductsStyles.resetFilters}>
            <i className="bi bi-arrow-clockwise"/>
        </div>
        <h1><span>{ common_words.filter}</span><i className="bi bi-filter"/></h1>
        <div className={ allProductsStyles.content }>
            <div className={ allProductsStyles.filterByPrice }>
                <div className={ allProductsStyles.wrapper }>
                    <input
                        onChange={e => {
                            if(+e.target.value > 0){
                                handlerDebounce(() => changePrise([+e.target.value,prices[1]]))
                            }else{
                                handlerDebounce(() => changePrise([minMaxPrice.min,prices[1]]))
                            }
                        }
                        }
                        defaultValue={ 0 } type='number' placeholder=' ' id='in'/>
                    <label htmlFor='in'>От</label>
                </div>
                <span>-</span>
                <div className={ allProductsStyles.wrapper }>
                    <input
                        defaultValue={prices[1]}
                        onChange={e => {
                            if(+e.target.value > 0){
                                handlerDebounce(() => changePrise([prices[0],+e.target.value]))
                            }else{
                                handlerDebounce(() => changePrise([prices[0],minMaxPrice.max]))
                            }
                        }
                        }
                        type='number' placeholder=' ' id='to'/>
                    <label htmlFor='to'>До</label>
                </div>
            </div>
            <ul className={ allProductsStyles.categoriesBlock }>
                {
                    categories.map( category => {
                        if ( category?.flower_ids?.length ) {
                            return <li
                                onClick={ async () => {
                                    chooseCategory(category)
                                    dispatch(changePage(1))
                                    // await handlerProductData( category, dispatch )
                                }
                                }
                                style={categoryId === category.id ? {color: "rgba(232, 67, 147, 0.98)"} : {color: "black"}}
                                key={ uuidv4() }>
                                { category?.name }
                                <span>({ category.flower_ids.length })</span>
                            </li>
                        }
                        return null
                    } )
                }
            </ul>
        </div>
        <button
            onClick={() => {
                dispatch(changePage(1))
                dispatch( getAllProductsThunk( page, categoryId, prices ) )
            }}
        >{ common_words.confirm}</button>
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
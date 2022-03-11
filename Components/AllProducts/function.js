import React from 'react'
import allProductsStyles from "./allProducts.module.scss";
import { v4 as uuidv4 } from "uuid";
import {getAllProductsThunk} from "../../Redux/Action/product.action";
import {handlerDebounce} from "../Common/functions";
import {minMaxPrice} from "../Common/web-site-static-words";
//TODO set max and min size on price's inputs
export const filterOpenFunction = ( openFilter, categories, chooseCategory,dispatch,prices, changePrise,page,categoryId ) => {
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
                    <input
                        onChange={e => {
                            if(e.target.value){
                                handlerDebounce(() => changePrise([+e.target.value,prices[1]]))
                            }else{
                                handlerDebounce(() => changePrise([minMaxPrice.min,prices[1]]))
                            }
                        }
                        }
                        defaultValue={ 0 } type='number' placeholder=' ' id='in'/>
                    <label htmlFor='in'>In</label>
                </div>
                <span>-</span>
                <div className={ allProductsStyles.wrapper }>
                    <input
                        onChange={e => {
                            if(e.target.value){
                                handlerDebounce(() => changePrise([prices[0],+e.target.value]))
                            }else{
                                handlerDebounce(() => changePrise([prices[0],minMaxPrice.max]))
                            }
                        }
                        }
                        type='number' placeholder=' ' id='to'/>
                    <label htmlFor='to'>To</label>
                </div>
            </div>
            <ul className={ allProductsStyles.categoriesBlock }>
                {
                    categories.map( category => {
                        if ( category?.flower_ids?.length ) {
                            return <li
                                onClick={ async () => {
                                    chooseCategory(category)
                                    // await handlerProductData( category, dispatch )
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
        <button
            onClick={() => dispatch(getAllProductsThunk(page,categoryId,prices))}
        >Conf<span>irm</span></button>
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
import React from 'react'
import allProductsStyles from "./allProducts.module.scss";

export const filterOpenFunction = ( openFilter ) => {
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
                    <input defaultValue={ 0 } type='number' placeholder=' ' id='firstName'/>
                    <label htmlFor='firstName'>In</label>
                </div>
                <span>-</span>
                <div className={ allProductsStyles.wrapper }>
                    <input type='number' placeholder=' ' id='firstName'/>
                    <label htmlFor='firstName'>To</label>
                </div>
            </div>
            <ul className={ allProductsStyles.categoriesBlock }>
                <li>Category A <span>(123)</span></li>
                <li>Category B <span>(123)</span></li>
                <li>Category C <span>(123)</span></li>
                <li>Category D <span>(123)</span></li>
                <li>Category E <span>(123)</span></li>
                <li>Category F <span>(123)</span></li>
                <li>Category G <span>(123)</span></li>
                <li>Category H <span>(123)</span></li>
                <li>Category R <span>(123)</span></li>
                <li>Category C <span>(123)</span></li>
                <li>Category D <span>(123)</span></li>
                <li>Category E <span>(123)</span></li>
                <li>Category F <span>(123)</span></li>
                <li>Category G <span>(123)</span></li>
                <li>Category H <span>(123)</span></li>
                <li>Category R <span>(123)</span></li>
                <li>Category C <span>(123)</span></li>
                <li>Category D <span>(123)</span></li>
                <li>Category E <span>(123)</span></li>
                <li>Category F <span>(123)</span></li>
                <li>Category G <span>(123)</span></li>
                <li>Category H <span>(123)</span></li>
                <li>Category R <span>(123)</span></li>
                <li>Category C <span>(123)</span></li>
                <li>Category D <span>(123)</span></li>
                <li>Category E <span>(123)</span></li>
                <li>Category F <span>(123)</span></li>
                <li>Category G <span>(123)</span></li>
                <li>Category H <span>(123)</span></li>
                <li>Category R <span>(123)</span></li>
                <li>Category C <span>(123)</span></li>
                <li>Category D <span>(123)</span></li>
                <li>Category E <span>(123)</span></li>
                <li>Category F <span>(123)</span></li>
                <li>Category G <span>(123)</span></li>
                <li>Category H <span>(123)</span></li>
                <li>Category R <span>(123)</span></li>
                <li>Category C <span>(123)</span></li>
                <li>Category D <span>(123)</span></li>
                <li>Category E <span>(123)</span></li>
                <li>Category F <span>(123)</span></li>
                <li>Category G <span>(123)</span></li>
                <li>Category H <span>(123)</span></li>
                <li>Category R <span>(123)</span></li>
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
import React from 'react'
import listStyles from './list.module.scss'
import Products from './../Products/products';
const List = () => {
    return (
        <div className={listStyles.main}>
            <Products />
        </div>
    )
}

export default List

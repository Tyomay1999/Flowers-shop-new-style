import React from 'react'
import searchStyles from './search.module.scss'
import Categories from "../Categories/categories";

const Search = ( { witCategories } ) => {
    return (
        <div className={ searchStyles.main }>
            <div className={ searchStyles.searchBlock }>
                <div className={ searchStyles.wrapper }>
                    <input type="text" placeholder=' ' id='search'/>
                    <label htmlFor='search'>Sea<span>rch</span></label>
                    <i className="bi bi-search"/>
                </div>
            </div>
            {
                witCategories && <Categories/>
            }
        </div>
    )
}

export default Search;
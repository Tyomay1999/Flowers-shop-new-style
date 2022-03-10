import React, { useState } from 'react'
import searchStyles from './search.module.scss'
import {useDispatch} from "react-redux";
import {getAllProductsThunk, getProductBySearchThunk} from "../../../Redux/Action/product.action";

const Search = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState("all")

    return (
        <div className={searchStyles.main}>
            <div className={searchStyles.searchBlock}>
                <div className={searchStyles.wrapper}>
                    <input
                        onChange={e => {
                            if (e.target.value) {
                                setSearchValue(e.target.value)
                            } else {
                                setSearchValue('all')
                            }
                        }}
                        onKeyUp={e => {
                            if (e.keyCode === 13) {
                                console.log(searchValue)
                                if (searchValue === 'all') {
                                    dispatch(getAllProductsThunk())
                                } else {
                                    dispatch(getProductBySearchThunk(searchValue))
                                }
                            }
                        }}
                        type="text" placeholder=' ' id='search'/>
                    <label htmlFor='search'>Sea<span>rch</span></label>
                    <i onClick={() => {
                        if (searchValue === 'all') {
                            dispatch(getAllProductsThunk())
                        } else {
                            dispatch(getProductBySearchThunk(searchValue))
                        }
                    }} className="bi bi-search"/>
                </div>
            </div>
        </div>
    )
}

export default Search;
import React from 'react';
import paginationStyles from './pagination.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {changePage} from "../../../Redux/Action/common.action";

const Pagination = () => {
    const dispatch = useDispatch()
    const pagesCount = useSelector(state => state?.commonReducer.pagesCount)
    const page = useSelector(state => state?.commonReducer.page)
    return <div className={paginationStyles.main}>
        <button
            onClick={() => {
                dispatch(changePage(page - 1))
            }}
            disabled={page === 1}
        ><i className="bi bi-chevron-left"/></button>
        <span>{page} / {pagesCount}</span>
        <button
            disabled={page === pagesCount}
            onClick={() => {
                dispatch(changePage(page + 1))
            }}
        ><i className="bi bi-chevron-right"/></button>
    </div>
}

export default Pagination;
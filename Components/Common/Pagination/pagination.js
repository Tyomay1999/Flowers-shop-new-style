import React from 'react';
import paginationStyles from './pagination.module.scss';

const Pagination = () => {
    return <div className={paginationStyles.main}>
        <button><i className="bi bi-chevron-left"/></button>
        <button><i className="bi bi-chevron-right"/></button>
    </div>
}

export default Pagination;
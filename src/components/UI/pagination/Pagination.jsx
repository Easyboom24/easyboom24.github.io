import React from 'react';
import { getPagesArray } from '../../../utils/pages';
import classes from './Pagination.module.css'

const Pagination = ({totalPages,changePage,page}) => {
    
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className={classes.page__wrapper}>
        {pagesArray.map(p =>
          <span key={p} onClick={()=>changePage(p)} className={page === p 
          ? [classes.page,classes.page__current].join(' ')
          : classes.page}>
            {p}
          </span>
        )}
      </div>
    );
};

export default Pagination;
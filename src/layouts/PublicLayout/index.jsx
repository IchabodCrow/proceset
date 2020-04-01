import React from 'react';

import style from './index.module.css';

const PublicLayout = ({ children }) => {
  return (
    <div className={style.wrapper}>
      {children}
    </div>
  )
};

export default PublicLayout;

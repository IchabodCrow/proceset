import React from 'react';

import style from './index.module.css';

const PrivateLayout = ({ children }) => {
  return (
    <div className={style.wrapper}>
      {children}
    </div>
  )
};

export default PrivateLayout;

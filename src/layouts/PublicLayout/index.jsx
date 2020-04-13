import React from 'react';
import {ReactComponent as LogoSvg} from '../../resources/Vector.svg';
import style from './index.module.css';

const PublicLayout = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.body}> </div>
                    <div className={style.logo}>
                        <LogoSvg/>
                    </div>
      {children}
    </div>
  )
};

export default PublicLayout;

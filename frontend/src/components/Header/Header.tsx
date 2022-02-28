import React, { useEffect } from 'react';
import { toJS } from 'mobx';
import { useNavigate } from 'react-router-dom';

import AuthStore from '../../stores/AuthStore';
import { CurrentUser } from '../../types/Auth';
import { ReactComponent as UserIcon } from './icons/user.svg';
import classes from './Header.module.scss';

type HeaderProps = {
  role: string;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const navigate = useNavigate();

  let currentUser: any;

  // useEffect(() => {
  //   currentUser = toJS(AuthStore.currentUser);
  //   if (currentUser === undefined) {
  //     navigate('/auth');
  //   }
  //   // console.log(currentUser);
  // });

  const logOut = () => {
    navigate('/auth');
  };

  return (
    <div className={classes.component}>
      <div className={classes.content}>
        <h1 className={classes.logo}>CS-service</h1>
        <div className={classes.role}>
          <UserIcon className={classes.userIcon} onClick={logOut}/>
          {/* { currentUser !== undefined ? currentUser.position : ''} */}
        </div>
      </div>
      <div className={classes.line} />
    </div>
  );
};

export default Header;

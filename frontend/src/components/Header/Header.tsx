import React from 'react';

import { ReactComponent as UserIcon } from './icons/user.svg';
import classes from './Header.module.scss';

type HeaderProps = {
  role: string;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { role = '' } = props;
  return (
    <div className={classes.component}>
      <div className={classes.content}>
        <h1 className={classes.logo}>CS-service</h1>
        <div className={classes.role}>
          <UserIcon className={classes.userIcon} />
          {role}
        </div>
      </div>
      <div className={classes.line} />
    </div>
  );
};

export default Header;

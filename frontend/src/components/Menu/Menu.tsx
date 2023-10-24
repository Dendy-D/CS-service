import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/icons/mainLogo.svg';
import Home from '../../assets/icons/home.svg';
import Car from '../../assets/icons/car.svg';
import PotentialClients from '../../assets/icons/clients.svg';
import Employee from '../../assets/icons/employee.svg';
import Contract from '../../assets/icons/contract.svg';
import Settings from '../../assets/icons/settings.svg';
import Logout from '../../assets/icons/logout.svg';
import classes from './Menu.module.scss';

const navigationItems = [
  [
    { id: 1, path: '/', label: 'Main', icon: Home },
    { id: 2, path: '/cars', label: 'Cars', icon: Car },
    { id: 3, path: '/potential-clients', label: 'Potential clients', icon: PotentialClients },
    { id: 4, path: '/employees', label: 'Employees', icon: Employee },
    { id: 5, path: '/contracts', label: 'Contracts', icon: Contract },
  ],
  [
    { id: 1, path: '/settings', label: 'Settings', icon: Settings },
    { id: 2, path: '/logout', label: 'Logout', icon: Logout },
  ]
];

const Menu: React.FC = () => {
  const [activeNavLink, setActiveNavLink] = useState('');
  const navigation = useNavigate();

  const handleNavigation = (path: string) => {
    setActiveNavLink(path);
    navigation(path)
  }

  return (
    <div className={classes.component}>
      <div className={classes.logoAndName}>
        <Logo />
        <div>
          <h2>CarsSelling</h2>
          <p>Commercial system</p>
        </div>
      </div>
      <ul>
        {navigationItems[0].map((item) => (
          <li
            key={item.id}
            className={item.path === activeNavLink ? classes.active : ''}
            onClick={() => handleNavigation(item.path)}
          >
            {!['/cars', '/employees', '/contracts'].includes(item.path) ? (
              <item.icon /> 
            ) : (
              React.cloneElement(<item.icon />, { className: classes.svgWithFill })
            )}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      <ul>
        {navigationItems[1].map((item) => (
            <li
              key={item.id}
              className={item.path === activeNavLink ? classes.active : ''}
              onClick={() => handleNavigation(item.path)}
            >
              {React.cloneElement(<item.icon />, { className: classes.active })}
              <span>{item.label}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Menu;

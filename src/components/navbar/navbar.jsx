import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  const links = [
    { href: '/', label: 'Home', title: 'Vai alla home' },
    // { href: '/catalogo', label: 'Catalogo' },
  ];

  // Destructoring di un object:
  // const obj = { href: '/', label: 'Home' };
  // const { href, label } = obj;
  // sotto lo usiamo nel parametro della funzione passata al map

  return (
    <nav>
      <ul>
        {links.map(({ href, label, title }) => (
          <li key={href}>
            <NavLink
              to={href}
              title={title ? title : label}
              style={({ isActive }) => ({
                pointerEvents: isActive ? 'none' : 'auto',
                opacity: isActive ? 0.4 : 1,
              })}
              className={({ isActive }) =>
                isActive ? 'nav nav--active' : 'nav'
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

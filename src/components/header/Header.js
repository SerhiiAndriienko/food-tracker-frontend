import useMediaQuery from 'helpers/mediaQuery';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Logo, NavList, Navigation } from './Header.styled';

import { Link } from 'react-router-dom';
export default function Header() {
  const isDesktop = useMediaQuery('(min-width:1440px)');
  const isTablet = useMediaQuery('(min-width:834px)');
  return (
    <>
      <Navigation>
        <Logo>
          <span>Food-tracker</span>
          <button>
            <img
              src="https://andriizlt.github.io/healthyHub-frontend/static/media/menu.97ad8789cd03286d8287e77fd882b302.svg"
              alt="menu"
              height={'25px'}
              color="#fda"
            />
          </button>
        </Logo>
        {isDesktop && (
          <NavList>
            <li>
              <Link to={'/test'}>Home</Link>
            </li>
            <li>Dashboard</li>
            <li>Diary</li>
            <li>Recommended</li>
          </NavList>
        )}
        {isTablet && (
          <NavList>
            <li>Goal</li>
            <li>Weigth</li>
          </NavList>
        )}
        <button>
          <div>
            <p></p>
            <img></img>
          </div>
          Profile
        </button>
      </Navigation>
      <Outlet></Outlet>
    </>
  );
}

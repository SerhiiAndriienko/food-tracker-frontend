import useMediaQuery from 'helpers/mediaQuery';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  GoalWeightContainer,
  Logo,
  NavList,
  Navigation,
  Profile,
} from './Header.styled';
import NavigationLink from 'components/navigationLink/NavigationLink';

export default function Header() {
  const isDesktop = useMediaQuery('(min-width:1440px)');
  const isTablet = useMediaQuery('(min-width:834px)');
  return (
    <>
      <Navigation>
        <Logo>
          <Link to={'/'}>Food-tracker</Link>
          <button>
            <img
              src="https://andriizlt.github.io/healthyHub-frontend/static/media/menu.97ad8789cd03286d8287e77fd882b302.svg"
              alt="menu"
              height={'25px'}
              color="#fda"
            />
          </button>
        </Logo>
        {isDesktop && <NavigationLink></NavigationLink>}
        {isTablet && (
          <NavList>
            <GoalWeightContainer>
              <img
                height={'28px'}
                src="https://andriizlt.github.io/healthyHub-frontend/static/media/gainMuscle.747f9465f2b3869b77db.png"
                alt="goalImg"
              />
              <div>
                <span>Goal </span>
                <span>Lose fat</span>
              </div>
              <img
                height={'15px'}
                src="https://andriizlt.github.io/healthyHub-frontend/static/media/arrow_down.f75aff20b463a9b71cc7c577d017d1bb.svg"
                alt="openMenu"
              />
            </GoalWeightContainer>
            <GoalWeightContainer>
              <img
                height={'28px'}
                src="https://andriizlt.github.io/healthyHub-frontend/static/media/Weight.3b2a28209eca1dbfb33a.png"
                alt="goalImg"
              />
              <div>
                <span>Weigth </span>
                <span>100 kg</span>
              </div>
              <img
                height={'15px'}
                src="https://andriizlt.github.io/healthyHub-frontend/static/media/edit.dbdab56a20b44e845cfbb0e2c834d2bd.svg"
                alt="writeWeightImg"
              />
            </GoalWeightContainer>
          </NavList>
        )}

        <Profile>
          <span>Name</span>
          <img
            height={'24px'}
            style={{ borderRadius: '50%' }}
            src="https://www.gravatar.com/avatar/366e6392f294b87693b3f5ccbd47caa1?s=250&r=g&d=wavatar"
            alt="profileFoto"
          ></img>
          <img
            src="https://andriizlt.github.io/healthyHub-frontend/static/media/arrow_down.f75aff20b463a9b71cc7c577d017d1bb.svg"
            alt="openMenu"
          />
        </Profile>
      </Navigation>
      <Outlet></Outlet>
    </>
  );
}

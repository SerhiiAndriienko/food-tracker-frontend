import useMediaQuery from 'helpers/mediaQuery';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  // GoalWeightContainer,
  Logo,
  // NavList,
  Navigation,
  Profile,
  ChangeWeightStyle,
  MobileMenuStyle,
} from './Header.styled';
import NavigationLink from 'components/navigationLink/NavigationLink';
import ChangeWeight from 'components/changeWeight/ChangeWeight';
import GoalWeightComponent from 'components/goalWeightComponent/GoalWeightComponent';
import MobileMenu from 'components/mobileMenu/MobileMenu';

export default function Header() {
  const isDesktop = useMediaQuery('(min-width:1440px)');
  const isTablet = useMediaQuery('(min-width:834px)');
  const isMobile = useMediaQuery('(max-width:833px)');
  const [isModalChangeWeightOpen, setIsModalChangeWeightOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  const toggleWeightclick = () => {
    setIsModalChangeWeightOpen(!isModalChangeWeightOpen);
    console.log(isModalChangeWeightOpen);
  };
  const toggleMobileMenu = () => {
    setIsMobileModalOpen(!isMobileModalOpen);
  };
  return (
    <>
      <Navigation>
        <Logo>
          <Link to={'/'}>Food-tracker</Link>
          {/* <button> */}
          <img
            src="https://andriizlt.github.io/healthyHub-frontend/static/media/menu.97ad8789cd03286d8287e77fd882b302.svg"
            alt="menu"
            height={'25px'}
            color="#fda"
            onClick={toggleMobileMenu}
          />
          {/* </button> */}
          {isMobileModalOpen && (
            <MobileMenuStyle>
              {isMobile && (
                <MobileMenu
                  toggleMobileMenu={toggleMobileMenu}
                  toggleWeightclick={toggleWeightclick}
                  isModalChangeWeightOpen={isModalChangeWeightOpen}
                ></MobileMenu>
              )}
            </MobileMenuStyle>
          )}
        </Logo>
        {isDesktop && <NavigationLink></NavigationLink>}
        {isTablet && (
          <>
            {/* <ul> */}
            {isModalChangeWeightOpen && (
              <ChangeWeightStyle>
                <ChangeWeight
                  toggleWeightclick={toggleWeightclick}
                ></ChangeWeight>
              </ChangeWeightStyle>
            )}
            {/* </ul> */}
            <GoalWeightComponent
              toggleWeightclick={toggleWeightclick}
            ></GoalWeightComponent>
          </>
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

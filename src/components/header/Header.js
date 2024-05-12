import useMediaQuery from 'helpers/mediaQuery';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  Logo,
  Navigation,
  Profile,
  ChangeWeightStyle,
  MobileMenuStyle,
  ChangeGoalStyle,
  Test,
} from './Header.styled';
import NavigationLink from 'components/navigationLink/NavigationLink';
import ChangeWeight from 'components/changeWeight/ChangeWeight';
import GoalWeightComponent from 'components/goalWeightComponent/GoalWeightComponent';
import MobileMenu from 'components/mobileMenu/MobileMenu';
import ModalWindow from 'components/modalWindow/ModalWindow';
import ChangeGoal from 'components/changeGoal/ChangeGoal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width:1440px)');
  const isTablet = useMediaQuery('(min-width:834px)');
  const isMobile = useMediaQuery('(max-width:833px)');
  const [isChangeWeightOpen, setIsChangeWeightOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [isChangeGoalOpen, setIsChangeGoalOpen] = useState(false);

  const toggleWeightclick = () => {
    setIsChangeWeightOpen(!isChangeWeightOpen);
  };
  const toggleMobileMenu = () => {
    setIsMobileModalOpen(!isMobileModalOpen);
  };
  const toggleGoalClick = () => {
    setIsChangeGoalOpen(!isChangeGoalOpen);
  };

  const toggleIsModalWindowOpen = () => {
    if (isModalOpen) {
      setIsModalOpen(!isModalOpen);
      setIsChangeWeightOpen(false);
      setIsChangeGoalOpen(false);
    } else {
      setIsModalOpen(!isModalOpen);
    }
  };
  return (
    <>
      <Navigation>
        <Logo>
          <Link to={'/'}>
            <span>Food-tracker</span>
          </Link>
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
                  toggleIsModalWindowOpen={toggleIsModalWindowOpen}
                  toggleMobileMenu={toggleMobileMenu}
                  toggleWeightclick={toggleWeightclick}
                  isChangeWeightOpen={isChangeWeightOpen}
                  toggleGoalClick={toggleGoalClick}
                  isChangeGoalOpen={isChangeGoalOpen}
                ></MobileMenu>
              )}
            </MobileMenuStyle>
          )}
        </Logo>
        {isDesktop && <NavigationLink></NavigationLink>}
        {isTablet && (
          <>
            {isChangeWeightOpen && (
              <ChangeWeightStyle>
                <ChangeWeight
                  toggleWeightclick={toggleWeightclick}
                ></ChangeWeight>
              </ChangeWeightStyle>
            )}
            {isChangeGoalOpen && (
              <ChangeGoalStyle>
                <ChangeGoal toggleGoalClick={toggleGoalClick}></ChangeGoal>
              </ChangeGoalStyle>
            )}
            <GoalWeightComponent
              toggleWeightclick={toggleWeightclick}
              toggleGoalClick={toggleGoalClick}
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
        {isChangeGoalOpen && (
          <Test
            onClick={() => {
              toggleGoalClick();
            }}
          ></Test>
        )}
        {isChangeWeightOpen && (
          <Test
            onClick={() => {
              toggleWeightclick();
            }}
          ></Test>
        )}
      </Navigation>
      {isModalOpen && (
        <ModalWindow
          isModalOpen={isModalOpen}
          isChangeWeightOpen={isChangeWeightOpen}
          toggleIsModalWindowOpen={toggleIsModalWindowOpen}
          toggleWeightclick={toggleWeightclick}
          isChangeGoalOpen={isChangeGoalOpen}
        ></ModalWindow>
      )}
      <Outlet></Outlet>
    </>
  );
}

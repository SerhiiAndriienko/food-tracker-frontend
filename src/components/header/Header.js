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
  ModalBackdrop,
} from './Header.styled';
import NavigationLink from 'components/navigationLink/NavigationLink';
import ChangeWeight from 'components/changeWeight/ChangeWeight';
import GoalWeightComponent from 'components/goalWeightComponent/GoalWeightComponent';
import MobileMenu from 'components/mobileMenu/MobileMenu';
import ModalWindow from 'components/modalWindow/ModalWindow';
import ChangeGoal from 'components/changeGoal/ChangeGoal';
import { useSelector, useDispatch } from 'react-redux';
import { getIsModalOpen } from '../../redux/redux/modalWindow/selectors';
import { setIsModalOpen } from '../../redux/redux/modalWindow/slice';

export default function Header() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getIsModalOpen);
  const isDesktop = useMediaQuery('(min-width:1440px)');
  const isTablet = useMediaQuery('(min-width:834px)');
  const isMobile = useMediaQuery('(max-width:833px)');
  const [isChangeWeightOpen, setIsChangeWeightOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [isChangeGoalOpen, setIsChangeGoalOpen] = useState(false);
  const isAddWaterModalOpen = useSelector(
    state => state.waterLevel.isModalOpen
  );
  const toggleWeightclick = () => {
    setIsChangeWeightOpen(!isChangeWeightOpen);
  };
  const toggleMobileMenu = () => {
    isModalOpen && dispatch(setIsModalOpen(false));
    setIsChangeWeightOpen(false);
    setIsChangeGoalOpen(false);
    setIsMobileModalOpen(!isMobileModalOpen);
  };
  const toggleGoalClick = () => {
    setIsChangeGoalOpen(!isChangeGoalOpen);
  };

  const toggleIsModalWindowOpen = () => {
    if (isModalOpen) {
      dispatch(setIsModalOpen(!isModalOpen));
      setIsChangeWeightOpen(false);
      setIsChangeGoalOpen(false);
      isAddWaterModalOpen && dispatch(setIsModalOpen(false));
    } else {
      dispatch(setIsModalOpen(!isModalOpen));
    }
  };

  return (
    <>
      <Navigation>
        <Logo>
          <Link to={'/'}>
            <span>Food-tracker</span>
          </Link>

          <button onClick={toggleMobileMenu}>
            <img
              src="https://andriizlt.github.io/healthyHub-frontend/static/media/menu.97ad8789cd03286d8287e77fd882b302.svg"
              alt="menu"
              height={'25px'}
              color="#fda"
            />
          </button>
          {isMobileModalOpen && isMobile && (
            <MobileMenuStyle>
              <MobileMenu
                toggleIsModalWindowOpen={toggleIsModalWindowOpen}
                toggleMobileMenu={toggleMobileMenu}
                toggleWeightclick={toggleWeightclick}
                isChangeWeightOpen={isChangeWeightOpen}
                toggleGoalClick={toggleGoalClick}
                isChangeGoalOpen={isChangeGoalOpen}
              />
            </MobileMenuStyle>
          )}
        </Logo>
        {isDesktop && <NavigationLink></NavigationLink>}
        {isTablet && (
          <>
            {isChangeWeightOpen && (
              <ChangeWeightStyle isDesktop={isDesktop}>
                <ChangeWeight
                  toggleWeightclick={toggleWeightclick}
                ></ChangeWeight>
              </ChangeWeightStyle>
            )}
            {isChangeGoalOpen && (
              <ChangeGoalStyle isDesktop={isDesktop}>
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
          <ModalBackdrop
            isModalOpen={isModalOpen}
            onClick={() => {
              toggleGoalClick();
            }}
          ></ModalBackdrop>
        )}
        {isChangeWeightOpen && (
          <ModalBackdrop
            isModalOpen={isModalOpen}
            onClick={() => {
              toggleWeightclick();
            }}
          ></ModalBackdrop>
        )}
      </Navigation>
      {isModalOpen && (
        <ModalWindow
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

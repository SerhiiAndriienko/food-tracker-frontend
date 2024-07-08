import useMediaQuery from 'helpers/mediaQuery';
import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  Logo,
  Navigation,
  Profile,
  ChangeWeightStyle,
  MobileMenuStyle,
  ChangeGoalStyle,
  ModalBackdrop,
  RegBtn,
  ProfileName,
} from './Header.styled';
import NavigationLink from 'components/navigationLink/NavigationLink';
import ChangeWeight from 'components/changeWeight/ChangeWeight';
import GoalWeightComponent from 'components/goalWeightComponent/GoalWeightComponent';
import MobileMenu from 'components/mobileMenu/MobileMenu';
import ModalWindow from 'components/modalWindow/ModalWindow';
import ChangeGoal from 'components/changeGoal/ChangeGoal';
import { useSelector, useDispatch } from 'react-redux';
import { getIsMainModalOpen } from '../../redux/redux/modalWindow/selectors';
import { setIsMainModalOpen } from '../../redux/redux/modalWindow/slice';
import LogOutModal from 'components/logOut/LogOut';
import { fetchUser } from '../../redux/redux/userSlice/operation';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMainModalOpen = useSelector(getIsMainModalOpen);
  const isDesktop = useMediaQuery('(min-width:1440px)');
  const isTablet = useMediaQuery('(min-width:834px)');
  const isMobile = useMediaQuery('(max-width:833px)');
  const userName = useSelector(state => state.user.userName);
  const localUserId = sessionStorage.getItem('userId');
  const [isChangeWeightOpen, setIsChangeWeightOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [isChangeGoalOpen, setIsChangeGoalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const isAddWaterModalOpen = useSelector(
    state => state.isModalOpen.isMainModalOpen
  );

  const toggleWeightclick = bool => {
    setIsChangeWeightOpen(bool);
    setIsMobileModalOpen(false);
  };
  const toggleLogOutClick = e => {
    if (e.target.tagName === 'BUTTON') {
      if (e.target.textContent === 'Log out') {
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('userToken');
        sessionStorage.removeItem('id');

        dispatch(fetchUser);
        navigate('/');
        setIsLogOutModalOpen(!isLogOutModalOpen);
      }
    }
    if (e.target.tagName !== 'BUTTON') {
      setIsLogOutModalOpen(!isLogOutModalOpen);
    }
  };
  const toggleMobileMenu = () => {
    if (isMobile) {
      isMainModalOpen && dispatch(setIsMainModalOpen(false));
      setIsChangeWeightOpen(false);
      setIsChangeGoalOpen(false);
      setIsMobileModalOpen(!isMobileModalOpen);
    } else {
      return;
    }
  };
  const toggleGoalClick = bool => {
    setIsChangeGoalOpen(bool);
    setIsMobileModalOpen(false);
  };

  const toggleIsModalWindowOpen = () => {
    if (isMainModalOpen) {
      dispatch(setIsMainModalOpen(!isMainModalOpen));
      setIsChangeWeightOpen(false);
      setIsChangeGoalOpen(false);
      isAddWaterModalOpen && dispatch(setIsMainModalOpen(false));
    } else {
      dispatch(setIsMainModalOpen(!isMainModalOpen));
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
        {localUserId && (
          <>
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
                    <ChangeGoal
                      toggleGoalClick={toggleGoalClick}
                      toggleIsModalWindowOpen={toggleIsModalWindowOpen}
                    ></ChangeGoal>
                  </ChangeGoalStyle>
                )}
                <GoalWeightComponent
                  toggleWeightclick={toggleWeightclick}
                  toggleGoalClick={toggleGoalClick}
                ></GoalWeightComponent>
              </>
            )}
          </>
        )}

        <Profile>
          {!localUserId && (
            <Link to="/">
              <RegBtn>Profile</RegBtn>
            </Link>
          )}
          {localUserId && (
            <ProfileName onClick={toggleLogOutClick}>
              <span>{localUserId ? userName : ''}</span>

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
              {isLogOutModalOpen && <LogOutModal></LogOutModal>}
            </ProfileName>
          )}
        </Profile>
        {isChangeGoalOpen && (
          <ModalBackdrop
            isMainModalOpen={isMainModalOpen}
            onClick={() => {
              toggleGoalClick();
            }}
          ></ModalBackdrop>
        )}
        {isChangeWeightOpen && (
          <ModalBackdrop
            isMainModalOpen={isMainModalOpen}
            onClick={() => {
              toggleWeightclick();
            }}
          ></ModalBackdrop>
        )}
      </Navigation>
      {isMainModalOpen && (
        <ModalWindow
          toggleGoalClick={toggleGoalClick}
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

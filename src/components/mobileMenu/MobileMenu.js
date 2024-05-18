import GoalWeightComponent from 'components/goalWeightComponent/GoalWeightComponent';
import NavigationLink from 'components/navigationLink/NavigationLink';
import {
  CloseBtn,
  MobileMenuContainer,
  ModalBackdrop,
} from './MobileMenu.styled';
import PropTypes from 'prop-types';

export default function MobileMenu({
  toggleMobileMenu,
  toggleWeightclick,
  toggleGoalClick,
  toggleIsModalWindowOpen,
}) {
  return (
    <>
      <ModalBackdrop onClick={toggleMobileMenu}></ModalBackdrop>
      <MobileMenuContainer>
        <div>
          <NavigationLink></NavigationLink>
          <GoalWeightComponent
            toggleIsModalWindowOpen={toggleIsModalWindowOpen}
            toggleWeightclick={toggleWeightclick}
            toggleGoalClick={toggleGoalClick}
          ></GoalWeightComponent>
          <CloseBtn
            src="https://andriizlt.github.io/healthyHub-frontend/static/media/close-circle.73bdd9e6ab202aa8197dc65002a783d9.svg"
            alt="close"
            onClick={toggleMobileMenu}
          />
        </div>
      </MobileMenuContainer>
    </>
  );
}

MobileMenu.propTypes = {
  toggleMobileMenu: PropTypes.func.isRequired,
  toggleWeightclick: PropTypes.func.isRequired,
  toggleGoalClick: PropTypes.func.isRequired,
  toggleIsModalWindowOpen: PropTypes.func.isRequired,
};

import GoalWeightComponent from 'components/goalWeightComponent/GoalWeightComponent';
import NavigationLink from 'components/navigationLink/NavigationLink';
import { CloseBtn } from './MobileMenu.styled';
import ChangeWeight from 'components/changeWeight/ChangeWeight';

export default function MobileMenu({
  toggleMobileMenu,
  toggleWeightclick,
  isModalChangeWeightOpen,
}) {
  return (
    <div>
      {isModalChangeWeightOpen ? (
        <ChangeWeight toggleWeightclick={toggleWeightclick}></ChangeWeight>
      ) : (
        <div>
          <NavigationLink></NavigationLink>
          <GoalWeightComponent
            toggleWeightclick={toggleWeightclick}
          ></GoalWeightComponent>
          <CloseBtn
            src="https://andriizlt.github.io/healthyHub-frontend/static/media/close-circle.73bdd9e6ab202aa8197dc65002a783d9.svg"
            alt="close"
            onClick={toggleMobileMenu}
          />
        </div>
      )}
    </div>
  );
}
// <div>
//   <NavigationLink></NavigationLink>
//   <GoalWeightComponent
//     toggleWeightclick={toggleWeightclick}
//   ></GoalWeightComponent>
//   {isModalChangeWeightOpen && <ChangeWeight></ChangeWeight>}
//   <CloseBtn
//     src="https://andriizlt.github.io/healthyHub-frontend/static/media/close-circle.73bdd9e6ab202aa8197dc65002a783d9.svg"
//     alt="close"
//     onClick={toggleMobileMenu}
//   />
// </div>;

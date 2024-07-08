import PropTypes from 'prop-types';

import { Modal, ModalBackdrop } from './ModalWindow.styled';

import ReactDOM from 'react-dom';
import ChangeWeight from 'components/changeWeight/ChangeWeight';
import ChangeGoal from '../changeGoal/ChangeGoal';
import { useDispatch, useSelector } from 'react-redux';
import { getIsMainModalOpen } from '../../redux/redux/modalWindow/selectors';
import {
  setIsMainModalOpen,
  setIsWaterModalOpen,
  setIsFoodModalOpen,
  setMealsType,
} from '../../redux/redux/modalWindow/slice';
import ModalAddWater from '../modalAddWater/ModalAddWater';
import useMediaQuery from 'helpers/mediaQuery';
import ModalAddFood from 'components/modalAddFood/ModalAddFood';
export default function ModalWindow({
  toggleIsModalWindowOpen,
  isChangeWeightOpen,
  isChangeGoalOpen,
  toggleGoalClick,
  toggleWeightclick,
}) {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getIsMainModalOpen);

  const isWaterModalOpen = useSelector(
    state => state.isModalOpen.isWaterModalOpen
  );
  const isFoodModalOpen = useSelector(
    state => state.isModalOpen.foodInfo.isFoodModalOpen
  );
  const isMobile = useMediaQuery('(max-width:834px)');
  return ReactDOM.createPortal(
    <>
      {isModalOpen && (
        <>
          <ModalBackdrop
            onClick={() => {
              dispatch(setIsMainModalOpen(false));
              isWaterModalOpen && dispatch(setIsWaterModalOpen(false));
              toggleGoalClick();
              if (isFoodModalOpen) {
                dispatch(setIsFoodModalOpen(false));
                dispatch(setMealsType(''));
              }
            }}
          ></ModalBackdrop>
          <Modal isMobile={isMobile}>
            <>
              {isChangeWeightOpen && (
                <ChangeWeight
                  toggleWeightclick={toggleWeightclick}
                  toggleIsModalWindowOpen={toggleIsModalWindowOpen}
                ></ChangeWeight>
              )}
              {isChangeGoalOpen && (
                <ChangeGoal
                  toggleGoalClick={toggleGoalClick}
                  toggleIsModalWindowOpen={toggleIsModalWindowOpen}
                ></ChangeGoal>
              )}
              {isWaterModalOpen && <ModalAddWater></ModalAddWater>}
              {isFoodModalOpen && <ModalAddFood></ModalAddFood>}
            </>
          </Modal>
        </>
      )}
    </>,
    document.querySelector('#modal-card')
  );
}
ModalWindow.propTypes = {
  toggleIsModalWindowOpen: PropTypes.func.isRequired,
  toggleGoalClick: PropTypes.func.isRequired,

  isModalOpen: PropTypes.bool,
  isChangeWeightOpen: PropTypes.bool.isRequired,
  toggleWeightclick: PropTypes.func.isRequired,
};

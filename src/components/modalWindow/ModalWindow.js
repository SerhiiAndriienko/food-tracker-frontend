import PropTypes from 'prop-types';

import { Modal, ModalBackdrop } from './ModalWindow.styled';

import ReactDOM from 'react-dom';
import ChangeWeight from 'components/changeWeight/ChangeWeight';
import ChangeGoal from '../changeGoal/ChangeGoal';
import { useDispatch, useSelector } from 'react-redux';
import { getIsModalOpen } from '../../redux/redux/modalWindow/selectors';
import { setIsModalOpen } from '../../redux/redux/modalWindow/slice';
import { setIsWaterModalOpen } from '../../redux/redux/water/slice';
import ModalAddWater from '../modalAddWater/ModalAddWater';
import useMediaQuery from 'helpers/mediaQuery';
export default function ModalWindow({
  toggleIsModalWindowOpen,
  isChangeWeightOpen,
  isChangeGoalOpen,
}) {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(getIsModalOpen);
  const isAddWaterModalOpen = useSelector(
    state => state.waterLevel.isModalOpen
  );
  const isMobile = useMediaQuery('(max-width:834px)');
  return ReactDOM.createPortal(
    <>
      {isModalOpen && (
        <>
          <ModalBackdrop
            isModalOpen={isModalOpen}
            onClick={() => {
              dispatch(setIsModalOpen(false));
              dispatch(setIsWaterModalOpen(false));
            }}
          ></ModalBackdrop>
          <Modal isMobile={isMobile}>
            <>
              {isChangeWeightOpen && (
                <ChangeWeight
                  toggleIsModalWindowOpen={toggleIsModalWindowOpen}
                ></ChangeWeight>
              )}
              {isChangeGoalOpen && (
                <ChangeGoal
                  toggleIsModalWindowOpen={toggleIsModalWindowOpen}
                ></ChangeGoal>
              )}
              {isAddWaterModalOpen && <ModalAddWater></ModalAddWater>}
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
  isModalOpen: PropTypes.bool,
  isChangeWeightOpen: PropTypes.bool.isRequired,
  toggleWeightclick: PropTypes.func.isRequired,
};

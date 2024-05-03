import PropTypes from 'prop-types';

import { Modal, ModalBackdrop } from './ModalWindow.styled';

import ReactDOM from 'react-dom';
import ChangeWeight from 'components/changeWeight/ChangeWeight';
import ChangeGoal from '../changeGoal/ChangeGoal';

export default function ModalWindow({
  toggleIsModalWindowOpen,
  isModalOpen,
  isChangeWeightOpen,
  isChangeGoalOpen,
}) {
  return ReactDOM.createPortal(
    <>
      {isModalOpen && (
        <>
          <ModalBackdrop
            onClick={() => {
              toggleIsModalWindowOpen();
            }}
          ></ModalBackdrop>
          <Modal>
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
  isModalOpen: PropTypes.bool.isRequired,
  isChangeWeightOpen: PropTypes.bool.isRequired,
  toggleWeightclick: PropTypes.func.isRequired,
};

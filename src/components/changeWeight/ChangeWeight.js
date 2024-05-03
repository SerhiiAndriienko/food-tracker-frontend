import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import {
  CancelBtn,
  CloseBtn,
  ConfirmBtn,
  Container,
} from './ChangeWeight.styled';

export default function ChangeWeight({
  toggleIsModalWindowOpen,
  toggleWeightclick,
}) {
  const isMobile = useMediaQuery('(max-width:833px)');
  return (
    <Container>
      <h2>Enter your current weight</h2>
      <p>You can record your weight once a day</p>
      <p>
        Today<span> 05.06.2023</span>
      </p>
      <div>
        <input placeholder="Enter your weight"></input>
        <ConfirmBtn>Confirm</ConfirmBtn>
      </div>
      {!isMobile ? (
        <CloseBtn
          src="https://andriizlt.github.io/healthyHub-frontend/static/media/close-circle.73bdd9e6ab202aa8197dc65002a783d9.svg"
          alt="close"
          onClick={toggleWeightclick}
        />
      ) : (
        <CancelBtn onClick={toggleIsModalWindowOpen}>Cancel</CancelBtn>
      )}
    </Container>
  );
}
ChangeWeight.propTypes = {
  toggleIsModalWindowOpen: PropTypes.func.isRequired,
  toggleWeightclick: PropTypes.func.isRequired,
};

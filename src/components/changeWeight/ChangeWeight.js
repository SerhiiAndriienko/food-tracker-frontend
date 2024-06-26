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
  const currentDate = new Date();

  const formattedDate = `${currentDate.getDate()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getFullYear()}`;

  return (
    <Container>
      <h2>Enter your current weight</h2>
      <p>You can record your weight once a day</p>
      <p>
        Today<span> {formattedDate.replaceAll('-', '.')}</span>
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
  toggleIsModalWindowOpen: PropTypes.func,
  toggleWeightclick: PropTypes.func,
};

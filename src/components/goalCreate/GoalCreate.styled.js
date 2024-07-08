import DatePicker from 'react-datepicker';
import styled, { createGlobalStyle } from 'styled-components';
const isTablet = '@media (min-width:833px)';

const isDesktop = '@media (min-width:1440px)';
// Глобальные стили для переопределения стилей react-datepicker
export const GlobalStyle = createGlobalStyle`
  .react-datepicker {
    font-family: 'Poppins', sans-serif;
  }
  .react-datepicker__input-container input {
    background-color: transparent; 
    border: 1px solid var(--color-primary---green-lite); 
    padding: 10px; 
    border-radius: 12px; 
    font-size: 16px; 
    color: var(--color-primary---grey); 
    width: 100%; 
  }
  .react-datepicker__header {
    background-color: rgba(0, 0, 0, 1);
  }
  .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
    color: var(--color-primary---grey); 
  }
  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
    color: black; 
   
  }
    .react-datepicker__year-select, .react-datepicker__month-select {
      margin-top: 10px; 
    background-color: rgba(0, 0, 0, 0.3); 
    color: var(--color-primary---white); 
  }
  .react-datepicker__month-dropdown:hover,
  .react-datepicker__year-dropdown:hover {
    background-color: rgba(0, 0, 0, 0.7); /* Цвет фона при наведении */
  }
  .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected {
    background-color: var(--color-primary---green-lite); /* Цвет фона для выбранного дня */
    color: black; 
  }
`;
export const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
export const Container = styled.div`
  color: var(--color-primary---white);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${isDesktop} {
  }
`;
export const InsideContainer = styled.div`
  ${isDesktop} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const GoalList = styled.div`
  ${isDesktop} {
    margin-left: 100px;
  }
`;

export const NextBtn = styled.button`
  display: block;

  transition: background-color 0.3s ease, border 0.3s ease;

  color: black;
  border: 2px solid var(--color-primary---green-lite);
  font-weight: 700;
  font-size: 16px;
  height: 36px;
  width: 100%;

  border-radius: 16px;
  background-color: var(--color-primary---green-lite);
  cursor: pointer;
  &:hover {
    background-color: #0f7b54;
    border: 1px solid transparent;
  }
  @media screen and (min-width: 834px) {
  }
  @media screen and (max-width: 834px) {
  }
`;
export const PrevBtn = styled.button`
  transition: background-color 0.3s ease, color 0.3s ease;
  color: ${props =>
    props.step === 1 ? 'black' : 'var(--color-primary---white)'};
  border: 1px solid var(--color-primary---grey);
  background-color: ${props =>
    props.step === 1 ? 'var(--color-primary---grey)' : 'var(--color-primary)'};
  width: 100%;

  &:hover {
    background-color: var(--color-primary---grey);
    color: black;
  }
  font-size: 14px;
  font-weight: 700;
  font-size: 16px;
  height: 36px;
  border-radius: 16px;
  cursor: pointer;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 350px;
`;
export const MainImage = styled.img`
  width: 350px;
  display: block;
  ${isTablet} {
    width: 380px;
  }
  ${isDesktop} {
    width: 592px;
  }
`;

export const GoalInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  width: 100%;
  max-width: 350px;

  ${isTablet} {
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }
  ${isDesktop} {
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
`;

export const RadioButton = styled.input`
  appearance: none;
  min-width: 20px;
  min-height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  margin-right: 8px;

  &:checked {
    background-color: var(--color-primary---lite-green);
    border-color: var(--color-primary---grey);
  }
`;

export const Label = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding-bottom: 12px;
  font-size: 14px;
  ${isTablet} {
    padding-bottom: 24px;
    padding-top: 12px;
  }
  ${isDesktop} {
    padding-bottom: 12px;
    padding-top: 0px;
  }
`;
export const StyledDatePicker = styled(DatePicker)`
  background-color: var(--color-primary---white);
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;
export const SomeInputs = styled.input`
  @media screen and (max-width: 834px) {
    width: 100%;
  }
  padding: 0;
  margin-top: 12px;
  margin-bottom: 32px;
  width: 212px;
  height: 36px;
  border: 1px solid var(--color-primary---green-lite);
  border-radius: 12px;
  outline: none;
  background-color: #0f0f0f;
  text-indent: 20px;
  color: #b6b6b6;

  &::placeholder {
    opacity: 1;
  }

  ${isTablet} {
    width: 88%;
  }
`;

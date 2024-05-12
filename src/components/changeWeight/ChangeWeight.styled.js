import styled from '@emotion/styled';
export const Container = styled.div`
  color: #b6b6b6;
  font-family: poppins;
  font-size: 14px;
  font-weight: 400;
  padding: 20px;
  padding-left: 24px;
  padding-right: 24px;
  overflow: hidden;
  h2 {
    margin: 0px;
    padding-bottom: 8px;
    font-family: 'Leckerli One', cursive;
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
  }
  p {
    margin: 0px;
    padding-bottom: 16px;
  }
  input {
    @media screen and (max-width: 834px) {
      width: 100%;
    }
    padding: 0;
    margin-right: 12px;
    height: 36px;
    width: 166px;
    border-radius: 16px;
    background-color: #555555;
    border-color: #e3ffa8;
    text-indent: 20px;
    color: #ffffff;
    &::placeholder {
      opacity: 1;
    }
  }
`;

export const CloseBtn = styled.img`
  position: absolute;
  top: 20px;
  right: 32px;
  height: 16px;
  cursor: pointer;
`;

export const ConfirmBtn = styled.button`
  margin-top: 12px;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: black;
  border: 2px solid #e3ffa8;
  font-weight: 700;
  height: 40px;
  width: 168px;
  border-radius: 16px;
  background-color: #e3ffa8;
  @media screen and (max-width: 834px) {
    width: 100%;
  }
  &:hover {
    background-color: #e3ffa8;
    color: #555;
  }
`;
export const CancelBtn = styled.button`
  margin-top: 12px;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: black;
    color: white;
  }
  color: black;
  border: 1px solid black;
  font-weight: 700;
  height: 40px;
  width: 168px;
  border-radius: 16px;
  background-color: #555;
  @media screen and (max-width: 834px) {
    width: 100%;
  }
`;
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;

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
  color: #e3ffa8;
  border: 2px solid #e3ffa8;
  font-weight: 700;
  height: 40px;
  width: 168px;
  border-radius: 16px;
  background-color: #555;

  &:hover {
    background-color: #e3ffa8;
    color: #555;
  }
`;
export const CancelBtn = styled.button`
  margin-top: 12px;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: black;
  border: 1px solid black;
  font-weight: 700;
  height: 40px;
  width: 168px;
  border-radius: 16px;
  background-color: #555;
`;

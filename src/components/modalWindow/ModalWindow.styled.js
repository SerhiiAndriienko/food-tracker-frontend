import styled from '@emotion/styled';

export const Modal = styled.div`
  width: 60%;
  margin: 0 auto;
  min-height: 200px;
  max-width: 541px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  border-radius: 10px;
  padding: 40px;
  background-color: #555;
  max-height: 100vh;
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
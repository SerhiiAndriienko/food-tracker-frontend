import styled from '@emotion/styled';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 5, 5, 0.8);
  z-index: 99999;
`;

export const ModalWindow = styled.div`
  width: 300px;
  height: 266px;
  border-radius: 12px;
  background-color: var(--color-primary---black-2);
  padding: 16px 12px;
`;

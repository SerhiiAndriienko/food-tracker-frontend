import styled from '@emotion/styled';
export const Container = styled.div`
  color: #b6b6b6;
  font-family: poppins;
  font-size: 14px;
  font-weight: 400;

  position: absolute;
  top: 70px;
  right: 10px;
  z-index: 9999;
  background-color: #0f0f0f;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px var(--color-primary---green-lite);

  display: flex;
  gap: 10px;
  flex-direction: column;
  @media screen and (max-width: 834px) {
  }
  h2 {
    margin: 0px;
    padding-bottom: 8px;
    font-family: 'Leckerli One', cursive;
    font-size: 18px;
    font-weight: 400;
    color: var(--color-primary---white);
  }
  p {
    margin: 0px;
    padding-bottom: 16px;
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
export const ButtonImg = styled.div`
  display: flex;

  button {
    background-color: transparent;
    border: none;
    color: var(--color-primary---white);
    cursor: pointer;
    font-size: 14px;
  }
  img {
    margin-left: 8px;
  }
`;

import styled from '@emotion/styled';

export const MobileMenuContainer = styled.div`
  width: 300px;
  padding: 24px;
  position: relative;
  z-index: 9999;

  ul {
    margin: 0;

    padding: 0;
  }
  a {
    color: var(--color-primary---white);
    font-family: poppins;
    font-weight: 300;
    font-size: 14px;
    transition: color 0.3s ease;
    :focus {
      color: red;
    }
  }
  li {
    margin-bottom: 24px;
  }
`;

export const CloseBtn = styled.img`
  position: absolute;
  top: 20px;
  right: 32px;
  height: 16px;
  cursor: pointer;
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

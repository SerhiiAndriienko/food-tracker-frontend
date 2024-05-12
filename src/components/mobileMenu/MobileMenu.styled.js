import styled from '@emotion/styled';

export const MobileMenuContainer = styled.div`
  width: 300px;
  padding: 24px;

  ul {
    margin: 0;

    padding: 0;
  }
  a {
    color: #ffffff;
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

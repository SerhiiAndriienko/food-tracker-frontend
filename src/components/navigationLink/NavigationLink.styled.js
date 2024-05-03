import styled from '@emotion/styled';

export const NavList = styled.ul`
  color: #ffffff;
  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    margin: 0;
    padding: 0;
    li {
      padding-right: 30px;
      a {
        transition: color 0.3s ease;
        color: #ffffff;

        :hover {
          color: red;
        }
        text-decoration: none;
      }
    }
  }
`;

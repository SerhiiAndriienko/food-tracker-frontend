import styled from '@emotion/styled';
export const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  li {
    padding-right: 30px;
    a {
      color: #fda;
      transition: color 0.3s ease;
      :hover {
        color: red;
      }
      text-decoration: none;
    }
  }
`;

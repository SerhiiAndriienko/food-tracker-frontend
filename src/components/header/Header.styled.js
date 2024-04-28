// @media screen and (min-width: 834px) {
// }
// @media screen and (min-width: 1440px) {
// }
import styled from '@emotion/styled';

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Leckerli One', cursive;
  font-size: 24px;
  font-weight: 800;
  color: #fda;
  background-color: #555;
  padding: 8px;
  a {
  }
  li {
    list-style: none;
  }
  p {
    margin: 0;
  }
  button {
    border: none;
    background-color: transparent;
    padding: 0;
  }
`;
export const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  li {
    padding-right: 30px;
  }
`;
export const Logo = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  button {
    margin-left: 5px;
    cursor: pointer;
  }
`;

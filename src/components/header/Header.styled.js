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
  a {
    color: #fda;
    transition: color 0.3s ease;
    :hover {
      color: red;
    }
    text-decoration: none;
  }
  button {
    margin-left: 5px;
    cursor: pointer;
  }
`;
export const Profile = styled.div`
  font-size: 24px;
  color: bisque;
  align-items: center;
  display: flex;
  span {
    margin-right: 12px;
    margin-left: 12px;
  }
  img {
    margin-right: 12px;
    display: block;
    cursor: pointer;
  }
`;
// export const GoalWeightContainer = styled.li`
//   display: flex;
//   align-items: center;
//   color: #ffffff;
//   font-size: 14px;
//   cursor: pointer;
//   div {
//     display: flex;
//     flex-direction: column;
//   }
//   img {
//     margin-left: 12px;
//     margin-right: 12px;
//   }
// `;
export const ChangeWeightStyle = styled.div`
  background-color: #555;
  position: absolute;
  top: 50px;
  box-shadow: 2px 2px 4px #e3ffa8;
  border-radius: 16px;
`;
export const MobileMenuStyle = styled.div`
  background-color: #555;
  position: absolute;
  top: 50px;
  box-shadow: 2px 2px 4px #e3ffa8;
  border-radius: 16px;
`;

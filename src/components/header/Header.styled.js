import styled from '@emotion/styled';

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Leckerli One', cursive;
  font-size: 24px;
  font-weight: 800;
  color: #fda;
  background-color: #0f0f0f;
  padding: 8px;
  padding-top: 19px;
  padding-bottom: 19px;

  a {
  }
  li {
    list-style: none;
  }
  p {
    margin: 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  a {
    text-decoration: none;
  }
  span {
    color: #fda;
    transition: color 0.3s ease;
    :hover {
      color: red;
    }
  }
  button {
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

export const ChangeWeightStyle = styled.div`
  background-color: #0f0f0f;
  z-index: 9999;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, 8%);
  box-shadow: 1px 1px 2px #e3ffa8;
  border-radius: 16px;
`;
export const MobileMenuStyle = styled.div`
  background-color: #555;
  position: absolute;
  top: 50px;
  box-shadow: 2px 2px 4px #e3ffa8;
  border-radius: 16px;
`;
export const ChangeGoalStyle = styled.div`
  background-color: #0f0f0f;
  position: absolute;
  z-index: 9999;
  top: 50px;
  left: 50%;
  transform: translate(-50%, 4%);
  box-shadow: 1px 1px 2px #e3ffa8;
  border-radius: 16px;
`;
export const Test = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
`;

import styled from '@emotion/styled';
export const Container = styled.div`
  color: #b6b6b6;
  font-family: poppins;
    //   height: 200px;
    // Width:392px;
font-size:14px;
padding:20px;
padding-left:24px;
padding-right:24px;
overflow: hidden;
  h2 {
margin:0px;
padding-bottom:8px;

    font-family: 'Leckerli One', cursive;
font-size:18px;
    color: #ffffff;
  }
  p{
    margin:0px;
padding-bottom:16px;
  }
  input{
    padding:0;
    margin-right:12px;
        height: 36px;
    Width:166px;
    border-radius:16px;
    background-color: #555555;
border-color:#e3ffa8;
  text-indent: 20px;
  color: #ffffff;

&::placeholder{
      opacity: 1;
}

  }
  button {
  transition: background-color 0.3s ease, color 0.3s ease;

    &:hover{
      background-color: #e3ffa8;
      color:#555
    }
    color:#e3ffa8;
    border:2px solid #e3ffa8;
    font-weight:700;
    height: 40px;
    Width:166px;
    border-radius:16px;
`;

export const CloseBtn = styled.img`
  position: absolute;
  top: 20px;
  right: 32px;
  height: 16px;
  cursor: pointer;
`;

import styled from '@emotion/styled';
const isTablet = '@media (min-width:833px)';

const isDesktop = '@media (min-width:1440px)';

const getButtonStyles = value => {
  if (value === 'signIn') {
    return `
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  color: black;
  border: 2px solid #e3ffa8;
  background-color: #e3ffa8;
      width: 100%;

        &:hover {
    background-color: #0f7b54;
    border: 2px solid #0f7b54;
    color: white;

  }
    `;
  } else if (value === 'next') {
    return `
      width: 100%;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  color: black;
  border: 2px solid #e3ffa8;
  background-color: #e3ffa8;
        &:hover {
    background-color: #0f7b54;
    border: 2px solid #0f7b54;

    color: white;
    `;
  } else if (value === 'signUp') {
    return `
  transition: background-color 0.3s ease, color 0.3s ease;
  color: var(--color-primary---white);
  border: 1px solid var(--color-primary---grey);
  background-color: transparent;
      width: 100%;

      &:hover {
    background-color: var(--color-primary---grey);
    color: black;
  }
      background-color: transparent;
      font-size: 14px;
    `;
  }
};
export const Container = styled.div`
  color: var(--color-primary---white);
  margin: 0 auto;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
  h1 {
    margin: 0;
    margin-top: 24px;
    margin-bottom: 16px;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 133%;
    color: var(--color-primary---grey);

    margin: 24px;
  }
  ${isTablet} {
    text-align: center;
    h1 {
      margin-top: 60px;
    }
  }
  ${isDesktop} {
    max-width: 100%;
    flex-direction: row;
  }
`;
export const InsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  ${isDesktop} {
    margin-left: 100px;

    height: 600px;
  }
`;

export const WelcomeImage = styled.img`
  height: 300px;
  ${isTablet} {
    height: 380px;
  }
  ${isDesktop} {
    height: 592px;
  }
`;
export const SomeButtons = styled.button`
  font-weight: 700;
  font-size: 16px;
  height: 36px;
  border-radius: 16px;
  cursor: pointer;

  ${({ value }) => getButtonStyles(value)}
  ${isTablet} {
    width: 100%;
  }
  @media screen and (max-width: 834px) {
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px;
`;

export const SomeInputs = styled.input`
  @media screen and (max-width: 834px) {
    width: 100%;
  }
  padding: 0;
  margin-bottom: 32px;
  width: 212px;
  height: 36px;
  border: 1px solid var(--color-primary---green-lite);
  border-radius: 12px;
  outline: none;
  background-color: #0f0f0f;
  text-indent: 20px;
  color: #b6b6b6;
  &:focus {
    border: 1px solid
      ${props => (props.isValid ? 'var(--color-primary---green-lite)' : 'red')};
  }
  &::placeholder {
    opacity: 1;
  }

  ${isTablet} {
    width: 100%;
  }
`;

export const GoalList = styled.ul`
  margin-top: 40px;
  padding-left: 20px;
  li {
    margin-bottom: 16px;
    color: var(--color-primary---green-lite);
    span {
      color: var(--color-primary---white);
    }
  }
  ${isTablet} {
    text-align: start;

    height: 380px;
    display: flex;
    gap: 16px;
    div {
      margin-right: 16px;
    }
  }
  ${isDesktop} {
    margin-top: 80px;
    display: block;
    height: 592px;
  }
`;

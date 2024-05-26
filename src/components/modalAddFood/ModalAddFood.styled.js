import styled from '@emotion/styled';

export const Container = styled.div`
  color: white;
  width: 100%;

  h3 {
    margin: 0;
    margin-bottom: 24px;

    font-family: var(--font-family);
    font-weight: 500;
    font-size: 30px;
    line-height: 120%;
  }
`;

export const AddBtn = styled.button`
  display: block;

  transition: background-color 0.3s ease, border 0.3s ease;

  color: black;
  border: 2px solid var(--color-primary---green-lite);
  font-weight: 700;
  font-size: 16px;
  height: 40px;
  width: 212px;

  border-radius: 16px;
  background-color: var(--color-primary---green-lite);
  cursor: pointer;
  &:hover {
    background-color: #0f7b54;
    border: 1px solid transparent;
  }
  @media screen and (min-width: 834px) {
  }
  @media screen and (max-width: 834px) {
  }
`;
export const CancelBtn = styled.button`
  display: block;
  margin-top: 12px;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: black;
    color: white;
  }
  color: var(--color-primary---white);
  border: 1px solid transparent;
  font-weight: 700;
  height: 40px;
  width: 212px;
  border-radius: 16px;
  background-color: transparent;
  cursor: pointer;
  @media screen and (max-width: 834px) {
    width: 100%;
  }
`;

export const MealsType = styled.div`
  padding-left: 12px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 144%;
  color: var(--color-primary---white);
`;

export const MealsTypeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
export const ButtonsDiv = styled.div``;
export const DeleteBtn = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;
export const NameInput = styled.input`
  @media screen and (max-width: 834px) {
    width: 100%;
  }
  padding: 0;
  margin-bottom: 16px;
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
      'var(--color-primary---green-lite);
  }
  &::placeholder {
    opacity: 1;
  }
`;
export const NutrientInput = styled.input`
  @media screen and (max-width: 834px) {
    width: 100%;
  }
  padding: 0;
  margin-bottom: 16px;
  width: 212px;
  height: 36px;
  border: 1px solid
    'var(--color-primary---green-lite);
  border-radius: 12px;
  outline: none;
  background-color: #0f0f0f;
  text-indent: 20px;
  color: #b6b6b6;
  &:focus {
    border: 1px solid
      'var(--color-primary---green-lite);
  }
  &::placeholder {
    opacity: 1;
  }
`;

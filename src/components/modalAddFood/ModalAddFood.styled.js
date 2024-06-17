import styled from '@emotion/styled';
const BASE_WIDTH = 17;
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

  border-radius: 16px;
  background-color: var(--color-primary---green-lite);
  cursor: pointer;
  &:hover {
    background-color: #0f7b54;
    border: 1px solid transparent;
  }
  @media screen and (min-width: 834px) {
  }
  width: 100%;
`;
export const CancelBtn = styled.button`
  display: block;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  &:hover {
    background-color: black;
    border-color: black;
  }
  color: var(--color-primary---white);
  border: 1px solid transparent;
  font-weight: 700;
  height: 40px;
  border-color: var(--color-primary---white);
  border-radius: 16px;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
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
export const DeleteBtn = styled.img`
  cursor: pointer;
`;
export const NameInput = styled.input`
  @media screen and (max-width: 834px) {
    width: 100%;
  }
  padding: 0;
  margin-bottom: 16px;
  width:   ${`${BASE_WIDTH * 1.4}%`};
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
  height: 36px;
  width: ${props => {
    if (props.placeholder === 'Fat') {
      return `${BASE_WIDTH * 0.8}%`; // 20% smaller
    } else {
      return `${BASE_WIDTH}%`; // Base width for other inputs
    }
  }};
  border: 1px solid var(--color-primary---green-lite);
  border-radius: 12px;
  outline: none;
  background-color: #0f0f0f;
  text-indent: 10px;
  color: #b6b6b6;
  &:focus {
    border: 1px solid var(--color-primary---green-lite);
  }
  &::placeholder {
    opacity: 1;

    font-weight: 400;
    font-size: 14px;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 834px) {
    flex-direction: row;
  }
`;
export const FatAndCaloriesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media screen and (min-width: 834px) {
  }
`;
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 124px;
  gap: 16px;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    align-items: center;
  }
`;

import styled from '@emotion/styled';

export const RecommendedFoodContainer = styled.div`
  padding: 10px;
  padding-top: 8px;
  background-color: #050505;

  color: #ffffff;
  a {
    padding-top: 5px;
    margin-left: 16px;
    text-decoration: none;
    color: #b6b6b6;
    font-size: 14px;
    font-weight: 500;
  }
  p {
    margin: 0;
    font-weight: 500;
  }
`;
export const RecommendedFoodHeader = styled.div`
  color: #ffffff;
  padding: 8px;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const NutrientBlock = styled.ul`
  list-style: none;

  padding-left: 24px;
  display: grid;
  grid-template-columns: ${({ isMobile }) =>
    isMobile ? '1fr' : 'repeat(2, 1fr)'};
  justify-content: flex-start;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`;

export const RecommendedFoodNutrientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #0f0f0f;
  padding: 20px;
`;

export const RecommendedFoodNutrientName = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`;

export const RecommendedFoodNutrientStatistics = styled.div`
  display: flex;
  gap: 12px;
  font-weight: 400;
  div {
    font-size: 14px;
    line-height: 1.43;
  }
  span {
    color: #b6b6b6;
  }
`;

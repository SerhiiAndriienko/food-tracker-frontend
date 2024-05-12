import styled from '@emotion/styled';
const isTablet = '@media (min-width:833px)';

export const Container = styled.div`
  color: white;

  padding: 10px;
  background-color: #050505;

  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
  }
  position: relative;
`;

export const DiaryHeader = styled.div`
  display: flex;
  align-items: start;
  background-color: #050505;

  color: #ffffff;
  padding: 8px;
  padding-bottom: 20px;
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

    font-size: 24px;
    font-weight: 500;
  }
`;

export const NutrientBlock = styled.div`
  background-color: #0f0f0f;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding-bottom: 12px;
  ${isTablet} {
    flex-direction: row;
    align-items: center;
  }
`;

export const NutrientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  p{
     ${isTablet} {
width: 150px;
  }
`;

export const NutrientName = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
`;

export const NutrientStatistics = styled.div`
  display: flex;
  gap: 12px;

  div {
    font-size: 14px;
    line-height: 1.43;
  }
  span {
    color: #b6b6b6;
  }
`;
export const RecordBtn = styled.button`
  background-color: transparent;
  color: #e3ffa8;
  border: none;
  cursor: pointer;
`;
export const Nutrients = styled.div`
  display: flex;

  flex-direction: column;
  div {
    display: inline;
    margin-bottom: 20px;
    margin-right: 20px;
  }
  ${isTablet} {
    flex-direction: row;
    div {
      margin-bottom: 0px;
    }
  }
`;

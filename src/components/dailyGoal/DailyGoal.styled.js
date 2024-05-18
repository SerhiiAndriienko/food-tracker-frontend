import styled from '@emotion/styled';
const isDesktop = '@media (min-width:1440px)';
const isTablet = '@media (min-width:833px)';

export const DailyGoalContainer = styled.div`
  width: 100%;
  color: var(--color-primary---white);
  padding: auto;
  p {
    margin: 0;

    font-size: 24px;
    font-weight: 500;
  }
  ${isDesktop} {
    width: 100%;
    flex-grow: 1;
  }
`;
export const DailyGoalText = styled.div`
  font-size: 18px;

  margin-bottom: 6px;
`;

export const CaloriesContainer = styled.div`
  display: flex;
  padding-top: 20px;
  align-items: center;

  padding-bottom: 20px;
  div {
    display: flex;
    flex-direction: column;
  }
`;
export const Calories = styled.span`
  color: #b6b6b6;
  font-size: 18px;
`;
export const Numbers = styled.span`
  font-size: 28px;
  display: flex;
  align-items: center;
  span {
    margin-left: 4px;
    color: #b6b6b6;
    font-size: 14px;
  }
`;
export const WaterContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  div {
    display: flex;
    flex-direction: column;
  }
`;
export const WaterAndCaloriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f0f0f;
  border-radius: 15px;
  ${isTablet} {
    height: 89%;
  }
  ${isDesktop} {
    height: 89%;
  }
`;

import styled from '@emotion/styled';
const isDesktop = '@media (min-width:1440px)';

export const Container = styled.div`
  color: white;
  width: 100%;

  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 6px;
  }
`;

export const Canvas = styled.canvas`
  background-color: #b6c3ff;
  width: 64px;
  border-radius: 20px;
`;
export const CanvasContainer = styled.div`
  background-color: #050505;
  border: 1px solid #292928;
  width: 70px;
  border-radius: 20px;
  padding: 5px;
`;
export const AddWaterContainer = styled.div`
  display: flex;
  background-color: #0f0f0f;
  border-radius: 15px;
  padding: 16px 0 16px 20px;
  position: relative;
  ${isDesktop} {
    height: 76%;
  }
`;
export const DeleteBtn = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;
export const AddBtn = styled.button`
  transition: background-color 0.3s ease, color 0.3s ease;
  color: black;
  border: 2px solid #e3ffa8;
  font-weight: 700;
  font-size: 16px;
  height: 40px;
  width: 168px;
  border-radius: 16px;
  background-color: #e3ffa8;
  cursor: pointer;
  @media screen and (min-width: 834px) {
  }
  @media screen and (max-width: 834px) {
  }
`;
export const WaterText = styled.div`
  margin: 22px 0 0 20px;
`;
export const Ml = styled.span`
  margin-left: 4px;
  color: #b6b6b6;
  font-size: 14px;
`;

export const WaterConsumption = styled.span`
  font-size: 28px;
`;
export const WaterPercent = styled.span`
  position: absolute;
  top: 50px;
  left: 44px;

  font-weight: 700;
  font-size: 16px;
  color: ${props =>
    props.waterIntake && props.waterIntake < 76 ? '#b6c3ff' : '#0f0f0f'};
`;
export const Left = styled.div`
  display: box;
  margin-top: 8px;

  margin-bottom: 16px;
`;

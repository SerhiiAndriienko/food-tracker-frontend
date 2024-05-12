import styled from '@emotion/styled';
const isDesktop = '@media (min-width:1440px)';
const isTablet = '@media (min-width:833px)';

export const Container = styled.div`
  color: white;
  width: 100%;
  border: 0px solid transparent;
  border-radius: 15px;
  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 6px;
  }
  position: relative;
  ${isTablet} {
    grid-column: span 2;
  }
  ${isDesktop} {
    border-radius: 15px;
    grid-column: span 1;
  }
`;

export const InsideContainer = styled.div`
  cursor: default;

  padding: 10px;
  background-color: #0f0f0f;
  p {
    margin: 0;
  }

  ${isDesktop} {
    height: 81%;
    display: flex;
    align-items: center;
  }
`;

export const CaloriesText = styled.div`
  position: absolute;
  top: 97px;
  left: 62px;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${isDesktop} {
    top: 112px;
    left: 63px;
  }
`;
export const CaloriesNumber = styled.div`
  font-size: 32px;
`;
export const Calories = styled.div`
  font-size: 20px;
  color: #b6b6b6;
  font-weight: 400;
`;
export const TabletStyle = styled.div`
  display: ${({ isMobile }) => (!isMobile ? 'flex' : 'block')};
  gap: 20px;
`;

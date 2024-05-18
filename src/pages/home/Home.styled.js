import styled from '@emotion/styled';
const isTablet = '@media (min-width:833px)';

const isDesktop = '@media (min-width:1440px)';

export const TabletStyle = styled.div`
  display: flex;
`;
export const DesktopStyle = styled.div`
  display: grid;

  gap: 10px;
  ${isTablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${isDesktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const Container = styled.div`
  display: grid;

  justify-content: space-between;
  align-items: center;
  color: var(--color-primary---white);
  margin-bottom: 20px;
  a {
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

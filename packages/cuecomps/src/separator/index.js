import styled from 'styled-components';

export default styled.div`
  height: ${({ height }) => `${height || 1}px`};
  background-color: ${({ transparent, theme: { COLORS } }) => (
    transparent ? 'transparent' : COLORS.BORDER
  )};
`;

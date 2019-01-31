import styled from 'styled-components';

function getLineHeight({ size, precise, theme: { FONT: { SIZES }, TEXT: { PADDING } } }) {
  if (precise) {
    return 1;
  }

  return `${(SIZES[size] || SIZES.normal) + (PADDING * 2)}px`;
}

export default styled.div`
  display: ${({ display }) => display || 'block'};
  font-family: ${({ theme: { FONT: { FAMILY } } }) => FAMILY};
  font-size: ${({ size, theme: { FONT: { SIZES } } }) => `${SIZES[size] || SIZES.normal}px`};
  line-height: ${props => getLineHeight(props)};
  font-weight: ${({ weight, theme: { FONT: { WEIGHTS } } }) => WEIGHTS[weight] || WEIGHTS.normal};
  color: ${({ color, type, theme: { TEXT: { COLORS } } }) => color || COLORS[type] || COLORS.normal};
  text-align: ${({ align }) => align || 'left'};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')}
`;

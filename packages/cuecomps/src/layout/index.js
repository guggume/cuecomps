import styled, { css } from 'styled-components';
import { Row as FlexRow, Col as FlexCol } from 'react-styled-flexboxgrid';

const getGapSize = ({ gap, theme: { LAYOUT } }, def = 0) => {
  if (typeof gap === 'boolean') {
    return `${LAYOUT.GAP}px`;
  }

  return `${Number.isFinite(gap) ? gap : def}px`;
};

const getGutterSize = ({ gutter, theme: { LAYOUT } }, def = 0) => {
  if (typeof gutter === 'boolean') {
    return `${LAYOUT.GUTTER}px`;
  }

  return `${Number.isFinite(gutter) ? gutter : def}px`;
};


const getPadding = (props) => {
  const gap = getGapSize(props);
  const gutter = getGutterSize(props);

  return `${gap} ${gutter}`;
};

export const FlexView = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  padding: ${props => getPadding(props)};
  ${({ inherit }) => inherit && css`
    height: inherit;
  `};
  ${({ alignItems }) => alignItems && css`
    align-items: ${alignItems};
  `};
  ${({ justifyContent }) => justifyContent && css`
    justify-content: ${justifyContent};
  `};
  text-align: ${({ align }) => align};
`;

export const Col = styled(FlexCol)`
  padding: ${props => `${getGapSize(props)} ${getGutterSize(props, props.theme.LAYOUT.GUTTER / 2)}`}
  ${({ auto }) => auto && css`
    flex: 1;
  `};
  ${({ autoRight }) => autoRight && css`
    margin-left: auto;
  `};
  text-align: ${({ align }) => align};
`;

export const Row = styled(FlexRow)`
  flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
  margin-right: 0;
  margin-left: 0;
  padding: ${props => getPadding(props)};
  ${({ nowrap }) => nowrap && css`
    flex-wrap: inherit;
    & > :first-child {
      padding-left: 0;
    }

    & > :last-child {
      padding-right: 0;
    }
  `};
  ${({ inherit }) => inherit && css`
    height: inherit;
  `};
  ${({ alignItems }) => alignItems && css`
    align-items: ${alignItems};
  `};
  ${({ justifyContent }) => justifyContent && css`
    justify-content: ${justifyContent};
  `};
  text-align: ${({ align }) => align};
`;

export const Card = styled(FlexView)`
  display: block;
  background: ${({ theme: { CARD: { background } } }) => background};
  border-radius: ${({ theme: { CARD: { radius } } }) => `${radius}px`};
  ${({ shadow, theme: { CARD } }) => (!shadow && shadow !== false) && css`
    box-shadow: ${CARD.shadow};
  `};
  overflow: hidden;
`;

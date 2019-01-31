import React, { PureComponent } from 'react';

import styled, { css, keyframes } from 'styled-components';
import Text from '../text';

const getButtonHeight = ({ compact, theme: { BUTTON: { HEIGHTS } } }) => {
  if (compact) {
    return HEIGHTS.compact;
  }

  return HEIGHTS.normal;
};

const getSpinnerHeight = ({ compact, theme: { BUTTON: { SPINNERS } } }) => {
  if (compact) {
    return SPINNERS.compact;
  }

  return SPINNERS.normal;
};

const getBorder = ({ renderAs, theme: { BUTTONS } }, pusedo = '') => (
  BUTTONS[renderAs][`border${pusedo}`] || BUTTONS[renderAs].border
);

const getBackground = ({ renderAs, theme: { BUTTONS } }, pusedo = '') => (
  BUTTONS[renderAs][`background${pusedo}`] || BUTTONS[renderAs].background
);

const getTextColor = ({ renderAs, theme: { BUTTONS } }, pusedo = '') => (
  BUTTONS[renderAs][`color${pusedo}`] || BUTTONS[renderAs].color
);

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Label = styled(Text)`
  color: ${props => getTextColor(props)};
  text-decoration: ${({ underline }) => underline ? 'underline' : 'none'};
  ${({ busy }) => busy && css`
    transform: translateX(-12px);
  `};
`;

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  cursor: pointer;
  outline: none;
  transition: transform 100ms ease;
  height: ${props => `${getButtonHeight(props)}px`};
  padding: ${({ theme: { BUTTON: { PADDING } } }) => `0 ${PADDING}px`};
  border-radius: ${({ theme: { BUTTON: { RADIUS } } }) => `${RADIUS}px`};
  border: ${props => getBorder(props)};
  background: ${props => getBackground(props)};

  :hover {
    border: ${props => getBorder(props, 'Hover')};
    background: ${props => getBackground(props, 'Hover')};
    ${Label} {
      color: ${props => getTextColor(props, 'Hover')};
    }
  }

  :disabled {
    cursor: auto;
    border: ${props => getBorder(props, 'Disabled')};
    background: ${props => getBackground(props, 'Disabled')};

    ${Label} {
      color: ${props => getTextColor(props, 'Disabled')};
    }

    .icon {
      color: ${props => getTextColor(props, 'Disabled')};
    }
  }

  :enabled:active {
    transform: translateY(1px);
  }

  ${({ busy }) => busy && css`
    &:after {
      position: absolute;
      content: '';
      border: 2px solid #FFF;
      right: 12px;
      border-radius: 50%;
      width: ${props => `${getSpinnerHeight(props)}px`};
      height: ${props => `${getSpinnerHeight(props)}px`};
      border-width: 2px;
      border-color: #FFF transparent #FFF #FFF;
      transition: opacity .3s ease-in-out;
      animation: ${rotate} 1s infinite;
    }
  `};
`;

export default class Button extends PureComponent {
  static defaultProps = {
    underline: false,
    renderAs: 'primary',
    icon: null,
    iconPosition: 'right',
    busy: false,
  };

  getIcon = Icon => styled(Icon)`
    margin-right: ${({ iconPosition, theme: { BUTTON: { PADDING } } }) => (
    iconPosition === 'left' ? `${PADDING}px` : 0)};
    margin-left: ${({ iconPosition, theme: { BUTTON: { PADDING } } }) => (
      iconPosition === 'right' ? `${PADDING}px` : 0
    )};
    color: ${props => getTextColor(props)};
  `;

  render() {
    const { label, icon, iconPosition, onClick, ...other } = this.props;
    const Icon = icon ? this.getIcon(icon) : null;

    return (
      <StyledButton justify={icon ? 'space-between' : 'center'} onClick={onClick} {...other}>
        { iconPosition === 'left' && Icon && (
          <Icon className="icon" iconPosition={iconPosition} size={12} {...other} />
        )}
        <Label align={Icon ? 'left' : 'center'} weight="bold" {...other}>{label}</Label>
        { iconPosition === 'right' && Icon && (
          <Icon className="icon" iconPosition={iconPosition} size={12} {...other} />
        )}
      </StyledButton>
    );
  }
}

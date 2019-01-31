import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Close } from 'styled-icons/material/Close';

import styled, { css } from 'styled-components';

function getWrapperStyle({ size, width, height, radius }) {
  if (size === 'full-screen') {
    return css`
      width: 100%;
      height: 100%;
      max-height: 100%;
    `;
  }

  if (size === 'custom') {
    return css`
      width: ${width};
      height: ${height};
      max-height: ${height};
      border-radius: ${radius || '8px'};
    `;
  }

  return css`
    width: 420px;
    min-height: 56px;
    max-height: calc(100vh - 60px);
    border-radius: 8px;
  `;
}

const Wrapper = styled.div`
  position: relative;
  ${props => getWrapperStyle(props)};
  overflow: ${({ overflow }) => overflow};
  ${({ transparent, theme: { COLORS } }) => !transparent && css`
    background: ${COLORS.WHITE};
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.4);
  `};
`;
const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px;
  cursor: pointer;
`;
const CloseIcon = styled(Close)`
  color: ${({ theme: { COLORS } }) => COLORS.WHITE};
`;

export default class Modal extends PureComponent {
  static defaultProps = {
    transparent: false,
    overflow: 'auto',
    blocking: false,
    size: 'normal',
  };

  static propTypes = {
    Comp: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    transparent: PropTypes.bool,
    overflow: PropTypes.string,
    blocking: PropTypes.bool,
    size: PropTypes.string,
    props: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { Comp, props, blocking, transparent, size, onClose, ...other } = this.props;

    return (
      <Wrapper
        className="wrapper"
        size={size}
        transparent={transparent}
        {...other}
      >
        <Comp transparent={transparent} {...props} closeModal={onClose} />
        { !blocking && (
          <CloseButtonWrapper onClick={onClose}>
            <CloseIcon size={18} />
          </CloseButtonWrapper>
        )}
      </Wrapper>
    );
  }
}

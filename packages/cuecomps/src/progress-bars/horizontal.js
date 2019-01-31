import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Background = styled.div`
  position: relative;
  overflow: hidden;
  background: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ height, corners }) => (corners ? `${height / 2}px` : 0)};
`;

const Progress = styled.div`
  position: absolute;
  background: ${({ backgroundColor }) => backgroundColor};
  transition: width 300ms ease-in-out;
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  border-radius: 0;
`;

export default class ProgressBarHorizontal extends PureComponent {
  static defaultProps = {
    height: 8,
    backgroundColor: '#DEEEFF',
    progressColor: 'linear-gradient(94.5deg, #0177FF 0%, #1F48D7 100%)',
    corners: true,
  };

  static propTypes = {
    progress: PropTypes.number.isRequired,
    height: PropTypes.number,
    backgroundColor: PropTypes.string,
    progressColor: PropTypes.string,
    corners: PropTypes.bool,
  };

  render() {
    const { height, progress, corners, backgroundColor, progressColor } = this.props;

    return (
      <Background height={height} corners={corners} backgroundColor={backgroundColor}>
        <Progress height={height} progress={progress} backgroundColor={progressColor} />
      </Background>
    );
  }
}

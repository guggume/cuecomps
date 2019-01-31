import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${({ width }) => `${width}px`};
`;
const Gauge = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;

  &:before {
    position: absolute;
    content: '';
    height: 200%;
    width: 100%;
    border-radius: 50%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: 1px solid #000000;
  }

  &:after {
    position: absolute;
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: #000000;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const Meter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
  transform-origin: center bottom;
  transform: rotate(${({ danger }) => 180 + (180 * danger * 0.01)}deg);
  border: 1px solid #000000;
  border-top-right-radius: ${({ width }) => `${width / 2}px`};
  border-top-left-radius: ${({ width }) => `${width / 2}px`};
  background-color: ${({ progressColor }) => progressColor};

  &:after {
    position: absolute;
    content: '';
    transform: rotate(45deg);
    bottom: -2px;
    right: -2px;
    border: 2px solid;
    border-bottom-color: black;
    border-left-color: black;
    border-top-color: transparent;
    border-right-color: transparent;
  }
`;
const Needle = styled.div`
  position: absolute;
  left: calc(50% - 2px);
  bottom: 0;
  height: 100%;
  transform-origin: bottom;
  transform: rotate(${({ progress }) => -90 + (180 * progress * 0.01)}deg);
  transition: transform .8s ease-in-out;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 20px solid #000000;
`;

export default class ProgressBarGauge extends PureComponent {
  static defaultProps = {
    backgroundColor: '#2AC3AA',
    progressColor: '#EA5959',
  };

  static propTypes = {
    width: PropTypes.number.isRequired,
    danger: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string,
    progressColor: PropTypes.string,
  };

  render() {
    const { width, progress, danger, backgroundColor, progressColor } = this.props;

    return (
      <Wrapper width={width}>
        <Gauge backgroundColor={backgroundColor}>
          <Meter progressColor={progressColor} danger={danger} width={width} />
          <Needle progress={progress} />
        </Gauge>
      </Wrapper>
    );
  }
}

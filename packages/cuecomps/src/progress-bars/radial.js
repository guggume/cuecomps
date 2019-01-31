import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const SVG = styled.svg`
  display: block;
`;
const Circle = styled.circle`
  transition: stroke-dashoffset 0.3s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;
const Text = styled.text`
  font-family: ${({ theme: { FONT: { FAMILY } } }) => FAMILY};
  font-size: ${({ textSize }) => `${textSize}px`};
  text-anchor: middle;
  dominant-baseline: middle;
  stroke-width: 0;
  font-weight: 700;
`;

export default class ProgressBarRadial extends PureComponent {
  static getCircumference(radius) {
    return Math.PI * radius * 2;
  }

  static defaultProps = {
    radius: 8,
    stroke: 2,
    backgroundColor: '#DEEEFF',
    progressColor: '#1657E4',
    fillColor: 'transparent',
    textColor: '#000000',
    textSize: 14,
    text: null,
  };

  static propTypes = {
    radius: PropTypes.number,
    stroke: PropTypes.number,
    progress: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string,
    progressColor: PropTypes.string,
    fillColor: PropTypes.string,
    textColor: PropTypes.string,
    textSize: PropTypes.number,
    text: PropTypes.string,
  };

  render() {
    const {
      radius, progress, stroke, backgroundColor, progressColor, fillColor, text, textColor,
      textSize,
    } = this.props;
    const circumference = ProgressBarRadial.getCircumference(radius - stroke);

    return (
      <SVG width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - stroke}
          strokeWidth={stroke}
          fill={fillColor}
          stroke={backgroundColor}
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - stroke}
          strokeWidth={stroke}
          fill={fillColor}
          stroke={progressColor}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - (circumference * progress * 0.01)}
        />
        { text && (
          <Text x="50%" y="50%" text-anchor="middle" stroke={textColor} textSize={textSize}>{text}</Text>
        )}
      </SVG>
    );
  }
}

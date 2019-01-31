import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled, { css, keyframes } from 'styled-components';
import Text from '../text';

const moveten = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: -220px;
  }
`;
const movesix = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: -132px;
  }
`;
const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  position: relative;
  height: 22px;
  width: 8px;
  overflow: hidden;
`;
const Sec1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  ${({ paused, delay }) => !paused && css`
    animation: ${movesix} 60s steps(6, end) infinite;
    animation-delay: -${delay}s;
  `}
`;
const Sec2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  ${({ paused }) => !paused && css`
    animation: ${moveten} 10s steps(10, end) infinite;
  `};
`;
const Min1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  ${({ paused, delay }) => !paused && css`
    animation: ${movesix} 3600s steps(6, end) infinite;
    animation-delay: -${delay}s;
  `};
`;
const Min2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  ${({ paused, delay }) => !paused && css`
    animation: ${moveten} 600s steps(10, end) infinite;
    animation-delay: -${delay}s;
  `};
`;
const SplitText = styled(Text)`
  line-height: 18px;
`;

const TENS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const SIXES = [0, 1, 2, 3, 4, 5];

export default class Timer extends PureComponent {
  static defaultProps = {
    color: '#000000',
  };

  static propTypes = {
    color: PropTypes.string,
  };

  static getDigits(time) {
    if (time < 0) {
      return [0, 0, 0, 0];
    }

    const minutes = Math.trunc(time / 60);
    const seconds = Math.trunc(time % 60);

    return [
      Math.trunc((minutes % 60) / 10),
      Math.trunc((minutes % 60) % 10),
      Math.trunc(seconds / 10),
      Math.trunc(seconds % 10),
    ];
  }

  static propTypes = {
    time: PropTypes.number.isRequired,
  };

  state = {
    timerCompleted: false,
  };

  componentDidMount() {
    const { time } = this.props;

    this.timer = setTimeout(() => {
      this.setState({
        timerCompleted: true,
      });
    }, time * 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { color, time } = this.props;
    const { timerCompleted } = this.state;
    const [M1, M2, S1, S2] = Timer.getDigits(timerCompleted ? 0 : time);
    const SEC2 = [...TENS.slice(S2 + 1), ...TENS.slice(0, S2 + 1)].reverse();
    const SEC1 = [...SIXES.slice(S1 + 1), ...SIXES.slice(0, S1 + 1)].reverse();
    const MIN2 = [...TENS.slice(M2 + 1), ...TENS.slice(0, M2 + 1)].reverse();
    const MIN1 = [...SIXES.slice(M1 + 1), ...SIXES.slice(0, M1 + 1)].reverse();
    const delayS1 = 9 - S2;
    const delayM2 = 59 - `${S1}${S2}`;
    const delayM1 = 599 - M2 * 60 - `${S1}${S2}`;

    return (
      <Container>
        <Wrapper>
          <Min1 delay={delayM1} paused={timerCompleted}>
            {MIN1.map(v => (
              <Text color={color} align="center" weight="bold" key={v}>{v}</Text>
            ))}
          </Min1>
        </Wrapper>
        <Wrapper>
          <Min2 delay={delayM2} paused={timerCompleted}>
            {MIN2.map(v => (
              <Text color={color} align="center" weight="bold" key={v}>{v}</Text>
            ))}
          </Min2>
        </Wrapper>
        <Wrapper>
          <SplitText color={color} align="center" weight="bold">:</SplitText>
        </Wrapper>
        <Wrapper>
          <Sec1 delay={delayS1} paused={timerCompleted}>
            {SEC1.map(v => (
              <Text color={color} align="center" weight="bold" key={v}>{v}</Text>
            ))}
          </Sec1>
        </Wrapper>
        <Wrapper>
          <Sec2 paused={timerCompleted}>
            {SEC2.map(v => (
              <Text color={color} align="center" weight="bold" key={v}>{v}</Text>
            ))}
          </Sec2>
        </Wrapper>
      </Container>
    );
  }
}

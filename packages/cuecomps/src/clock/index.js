import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled, { keyframes } from 'styled-components';
import Text from '../text';

const moveten = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: -200px;
  }
`;
const movesix = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: -120px;
  }
`;
const Wrapper = styled.div`
  position: relative;
  height: 20px;
  width: 8px;
  display: inline-block;
  overflow: hidden;
`;
const Sec1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  animation: ${movesix} 60s steps(6, end) infinite;
  animation-delay: ${({ delay }) => `-${delay}s`};
`;
const Sec2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  animation: ${moveten} 10s steps(10, end) infinite;
`;
const Min1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  animation: ${movesix} 3600s steps(6, end) infinite;
  animation-delay: ${({ delay }) => `-${delay}s`};
`;
const Min2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  animation: ${moveten} 600s steps(10, end) infinite;
  animation-delay: ${({ delay }) => `-${delay}s`};
`;
const Hour2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  animation: ${moveten} 36000s steps(10, end) infinite;
  animation-delay: ${({ delay }) => `-${delay}s`};
`;
const Hour1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  animation: ${moveten} 360000s steps(10, end) infinite;
  animation-delay: ${({ delay }) => `-${delay}s`};
`;
const SplitText = styled(Text)`
  line-height: 18px;
`;

const TENS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const SIXES = [0, 1, 2, 3, 4, 5];

export default class Clock extends PureComponent {
  static getDigits(time) {
    if (time < 0) {
      return [0, 0, 0, 0, 0, 0];
    }

    const hours = Math.trunc(time / 3600);
    const minutes = Math.trunc(time / 60);
    const seconds = Math.trunc(time % 60);

    return [
      Math.trunc(hours / 10),
      Math.trunc(hours % 10),
      Math.trunc((minutes % 60) / 10),
      Math.trunc((minutes % 60) % 10),
      Math.trunc(seconds / 10),
      Math.trunc(seconds % 10),
    ];
  }

  static defaultProps = {
    startFrom: 0,
  };

  static propTypes = {
    startFrom: PropTypes.number,
  };

  render() {
    const { startFrom } = this.props;
    const [H1, H2, M1, M2, S1, S2] = Clock.getDigits(startFrom);
    const SEC2 = [...TENS.slice(S2), ...TENS.slice(0, S2)];
    const SEC1 = [...SIXES.slice(S1), ...SIXES.slice(0, S1)];
    const MIN2 = [...TENS.slice(M2), ...TENS.slice(0, M2)];
    const MIN1 = [...SIXES.slice(M1), ...SIXES.slice(0, M1)];
    const HOUR2 = [...TENS.slice(H2), ...TENS.slice(0, H2)];
    const HOUR1 = [...TENS.slice(H1), ...TENS.slice(0, H1)];
    const delayS1 = S2;
    const delayM2 = +`${S1}${S2}`;
    const delayM1 = M2 * 60 + delayM2;
    const delayH2 = `${M1}${M2}` * 60 + delayM2;
    const delayH1 = H2 * 60 * 60 + delayH2;

    return (
      <div>
        <Wrapper>
          <Hour1 delay={delayH1}>
            {HOUR1.map(v => <Text size="small" align="center" weight="bold" key={v}>{v}</Text>)}
          </Hour1>
        </Wrapper>
        <Wrapper>
          <Hour2 delay={delayH2}>
            {HOUR2.map(v => <Text size="small" align="center" weight="bold" key={v}>{v}</Text>)}
          </Hour2>
        </Wrapper>
        <Wrapper>
          <SplitText size="small" align="center" weight="bold">:</SplitText>
        </Wrapper>
        <Wrapper>
          <Min1 delay={delayM1}>
            {MIN1.map(v => <Text size="small" align="center" weight="bold" key={v}>{v}</Text>)}
          </Min1>
        </Wrapper>
        <Wrapper>
          <Min2 delay={delayM2}>
            {MIN2.map(v => <Text size="small" align="center" weight="bold" key={v}>{v}</Text>)}
          </Min2>
        </Wrapper>
        <Wrapper>
          <SplitText size="small" align="center" weight="bold">:</SplitText>
        </Wrapper>
        <Wrapper>
          <Sec1 delay={delayS1}>
            {SEC1.map(v => <Text size="small" align="center" weight="bold" key={v}>{v}</Text>)}
          </Sec1>
        </Wrapper>
        <Wrapper>
          <Sec2>
            {SEC2.map(v => <Text size="small" align="center" weight="bold" key={v}>{v}</Text>)}
          </Sec2>
        </Wrapper>
      </div>
    );
  }
}

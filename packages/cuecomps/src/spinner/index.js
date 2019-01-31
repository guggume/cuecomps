import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styled, { keyframes } from 'styled-components';
import { CircleNotch } from 'styled-icons/fa-solid/CircleNotch';
import { FlexView } from '../layout';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const CircleNotchIcon = styled(CircleNotch)`
  color: ${({ color }) => color};
  animation: ${rotate} 1.5s ease-in-out infinite;
`;

function SpinnerComp({ size, color }) {
  return (
    <FlexView justifyContent="center" alignItems="center" inherit>
      <CircleNotchIcon size={size} color={color} />
    </FlexView>
  );
}

SpinnerComp.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
};

SpinnerComp.defaultProps = {
  color: '#FFFFFF',
};

export default memo(SpinnerComp);

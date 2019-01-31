import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Text from '../../text';
import { Col, Row } from '../../layout';

const StyledInput = styled.input`
  width: 100%;
  height: 42px;
  line-height: 14px;
  border: 1px solid #BAC0C3;
  border-radius: 4px;
  outline: none;
  font-family: ${({ theme: { FONT: { FAMILY } } }) => FAMILY};
  font-size: 14px;
  padding: 14px;
  margin-top: 8px;

  :focus {
    border-color: #0177FF;
  }
`;

export default class TextInput extends PureComponent {
  static defaultProps = {
    type: 'text',
    label: null,
    placeholder: '',
    error: null,
    onChange: () => {},
  };

  static propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
  };

  onChange = (e) => {
    const { onChange } = this.props;

    onChange(e.target.value, e);
  };

  render() {
    const { label, error, onChange, ...other } = this.props;

    return (
      <label>
        <Row>
          <Col>
            <Text size="small" precise>{label}</Text>
          </Col>
          { error && (
            <Col autoRight>
              <Text size="small" type="negative" precise>{error}</Text>
            </Col>
          )}
        </Row>
        <StyledInput onChange={this.onChange} {...other} />
      </label>
    );
  }
}

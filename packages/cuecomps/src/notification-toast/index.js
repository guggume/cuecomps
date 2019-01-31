import React, { PureComponent } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Close } from 'styled-icons/material/Close';

const TextMessage = styled.div`
  color: #FFFFFF;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif
`;

const CtaWrapper = styled.div`
  color: #FFFFFF;
  width: 100%
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CtaLink = styled.a`
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin: 4px;
  font-family: 'Open Sans', sans-serif;
  text-decoration: underline;
  cursor: pointer;
`;
const CloseBtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  cursor: pointer;
`;

const CloseIcon = styled(Close)`
  color: #FFFFFF;
`;

const ToastWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 300px;
  min-height: 100px;
  top: 80px;
  right: 20px;
  padding: 12px 12px;
  background: linear-gradient(56.99deg, #0177FF 0%, #1F48D7 100%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  z-index: 13;
  transform: translateX(350px);
  transition: all 300ms ease-in-out;
`;

const CTDiv = styled.div`
  align-self: center;
  width: 100%;
`;

const transitionStyles = {
  entering: { transform: 'translateX(0)' },
  entered: { transform: 'translateX(0)', transition: 'all 300ms ease-in-out' },
  exiting: { transform: 'translateX(350px)' },
  exited: { transform: 'translateX(350px)' },
};

export default class NotificationToast extends PureComponent {
  static defaultProps = {
    message: null,
    timeout: 2000,
    ctaList: null,
  };

  static propTypes = {
    message: PropTypes.string,
    timeout: PropTypes.number,
    ctaList: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })),
    hideToast: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      inProp: !!props.message,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      inProp: !!nextProps.message,
    });
  };

  componentDidUpdate = () => {
    const { message, ctaList } = this.props;

    const isDismissible = !(ctaList !== null && ctaList.length > 0);
    if (message && isDismissible) {
      this.startHideTimer();
    }
    if (!isDismissible) {
      this.clearTimer();
    }
  };

  componentWillUnmount() {
    this.clearTimer();
  }

  hideToastTrigger = () => {
    const { hideToast } = this.props;
    hideToast();
    this.clearTimer();
  };

  ctaClick = (ctaCallback) => {
    ctaCallback();
    this.hideToastTrigger();
  };

  startHideTimer = () => {
    const { timeout } = this.props;
    this.timer = setTimeout(() => {
      this.hideToastTrigger();
    }, timeout);
  };

  clearTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  };

  renderCtaList = () => {
    const { ctaList } = this.props;

    if (ctaList) {
      return ctaList.map(({ text, onClick }) => (
        <CtaLink key={text} onClick={() => this.ctaClick(onClick)}>{text}</CtaLink>
      ));
    }

    return null;
  };

  render() {
    const { message, ctaList } = this.props;
    const { inProp } = this.state;
    const isDismissible = !(ctaList !== null && ctaList.length > 0);
    const duration = 1000;

    return (
      <div>
        <Transition in={inProp} timeout={duration}>
          {state => (
            <ToastWrapper style={{ ...transitionStyles[state] }}>
              {isDismissible && (
                <CloseBtnWrapper onClick={this.hideToastTrigger}>
                  <CloseIcon size={15} />
                </CloseBtnWrapper>
              )}
              <CTDiv>
                <TextMessage>{message}</TextMessage>
                <CtaWrapper>
                  { this.renderCtaList() }
                </CtaWrapper>
              </CTDiv>
            </ToastWrapper>
          )}
        </Transition>
      </div>
    );
  }
}

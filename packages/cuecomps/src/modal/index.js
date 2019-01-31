import React, { Suspense, PureComponent } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Text from '../text';
import Modal from './view';

const TIMEOUT = {
  enter: 0,
  exit: 400,
};

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(1, 35, 74, 0.75);
  z-index: ${({ theme: { ZINDEX: { MODAL } } }) => MODAL};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity .3s ease-in;
  pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};
`;
const ScaleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh);
  transform: scale(${({ visible }) => (visible ? 1 : 0)});
  transition: transform .3s ease-in;
`;

export default class ModalProvider extends PureComponent {
  static defaultProps = {
    modal: null,
    scrollDisableClass: 'disable-scroll',
  };

  static propTypes = {
    scrollDisableClass: PropTypes.string,
    modal: PropTypes.shape({
      name: PropTypes.string.isRequired,
      options: PropTypes.object,
      props: PropTypes.object,
    }),
    modals: PropTypes.shape({}).isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { modal, scrollDisableClass } = this.props;

    if (modal && !prevProps.modal) {
      document.body.classList.add(scrollDisableClass);
    } else if (!modal && prevProps.modal) {
      document.body.classList.remove(scrollDisableClass);
    }
  }

  onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      const { modal, onClose } = this.props;

      if (modal.options && modal.options.blocking) {
        return;
      }

      onClose();
    }
  };

  renderModal({ name, options, props }) {
    const { modals, onClose } = this.props;
    const Comp = modals[name];

    return (
      <Modal
        key={name}
        Comp={Comp}
        props={props}
        onClose={onClose}
        {...options}
      />
    );
  }

  render() {
    const { modal } = this.props;

    return (
      <TransitionGroup>
        { modal && (
          <Transition key={modal.name} modal={modal} timeout={TIMEOUT}>
            {(state, childProps) => (
              <BackDrop visible={state === 'entered'}>
                <ScaleWrapper visible={state === 'entered'} onClick={this.onBackdropClick}>
                  <Suspense fallback={<Text>Loading...</Text>}>
                    {this.renderModal(childProps.modal)}
                  </Suspense>
                </ScaleWrapper>
              </BackDrop>
            )}
          </Transition>
        )}
      </TransitionGroup>
    );
  }
}

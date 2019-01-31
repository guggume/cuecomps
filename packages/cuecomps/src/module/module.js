import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from '../text';

export default class Module extends PureComponent {
  static defaultProps = {
    loadingComponent: null,
  };

  static propTypes = {
    module: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    visible: PropTypes.bool.isRequired,
    loadingComponent: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };

  renderModule() {
    const { visible, module: Component, ...other } = this.props;

    return (
      <Component {...other} />
    );
  }

  render() {
    const { visible, loadingComponent: Loader } = this.props;

    if (!visible) {
      if (Loader) {
        return <Loader />;
      }

      return <Text align="center">Loading...</Text>;
    }

    return this.renderModule();
  }
}

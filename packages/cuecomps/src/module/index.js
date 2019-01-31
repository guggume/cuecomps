import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Module from './module';

export default class ModuleContainer extends PureComponent {
  static propTypes = {
    resource: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  static getDerivedStateFromProps(props, state) {
    const { resource: { isLoaded, isLoading, isLoadingFailed, isStale } } = props;
    const { loadedOnce, cache } = state;

    if (!loadedOnce && cache && (isLoaded || isStale)) {
      return {
        loadedOnce: true,
        failedOnce: false,
      };
    }
    if (!loadedOnce && !cache && isLoading) {
      return {
        cache: true,
      };
    }
    if (isLoaded) {
      return {
        failedOnce: false,
      };
    }
    if (isLoadingFailed) {
      return {
        failedOnce: true,
      };
    }

    return null;
  }

  constructor(props) {
    super(props);

    const { cache } = this.props;

    this.state = {
      loadedOnce: false,
      failedOnce: false, // eslint-disable-line react/no-unused-state
      cache, // eslint-disable-line react/no-unused-state
    };
  }

  render() {
    const { resource, ...other } = this.props;
    const { loadedOnce } = this.state;

    return (
      <Module
        visible={loadedOnce}
        {...other}
      />
    );
  }
}

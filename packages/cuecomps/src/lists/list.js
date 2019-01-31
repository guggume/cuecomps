/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Item extends PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    renderItem: PropTypes.func.isRequired,
  };

  render() {
    const { index, item, renderItem } = this.props;

    return renderItem({
      item,
      index,
    });
  }
}

export default class List extends PureComponent {
  static defaultProps = {
    keyExtractor: item => item.id,
    ItemSeparatorComponent: null,
  };

  static propTypes = {
    data: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    ItemSeparatorComponent: PropTypes.func,
    keyExtractor: PropTypes.func,
  };

  render() {
    const { data, keyExtractor, ItemSeparatorComponent, ...other } = this.props;

    const list = data.map((item, index) => (
      <Item key={keyExtractor(item)} index={index} item={item} {...other} />
    ));

    if (!ItemSeparatorComponent) {
      return list;
    }

    return list.reduce((acc, x) => {
      if (acc === null) {
        return [x];
      }

      return [...acc, <ItemSeparatorComponent key={`separator-${x.key}`} />, x];
    }, null);
  }
}

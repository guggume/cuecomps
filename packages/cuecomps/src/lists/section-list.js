/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const SectionHeader = styled.div`
  outline: none;
`;
const SectionContent = styled.div`
  transition: max-height 300ms ease-in-out;
  max-height: ${({ height }) => (height ? `${height}px` : 0)};
  overflow: hidden;
`;

class Item extends PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired,
    sectionIndex: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    section: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    renderItem: PropTypes.func.isRequired,
  };

  render() {
    const { index, sectionIndex, section, item, renderItem } = this.props;

    return renderItem({
      item,
      section,
      index,
      sectionIndex,
    });
  }
}

class Section extends PureComponent {
  static defaultProps = {
    itemKeyExtractor: section => section.id,
  };

  static propTypes = {
    index: PropTypes.number.isRequired,
    dataKey: PropTypes.string.isRequired,
    section: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    renderSectionHeader: PropTypes.func.isRequired,
    renderSectionFooter: PropTypes.func.isRequired,
    itemKeyExtractor: PropTypes.func,
  };

  constructor() {
    super();

    this.state = {
      height: 0,
      open: false,
    };
    this.sectionRef = React.createRef();
  }


  onHeaderClick = () => {
    const { open } = this.state;
    let height = 0;

    if (this.sectionRef && !open) {
      height = this.sectionRef.current.scrollHeight;
    }

    this.setState({
      open: !open,
      height,
    });
  };

  renderItems() {
    const { index: sectionIndex, dataKey, section, itemKeyExtractor, ...other } = this.props;

    return section[dataKey].map((item, index) => (
      <Item
        key={itemKeyExtractor(item)}
        index={index}
        sectionIndex={sectionIndex}
        item={item}
        section={section}
        {...other}
      />
    ));
  }

  render() {
    const { index, section, renderSectionHeader, renderSectionFooter } = this.props;
    const { open, height } = this.state;

    return (
      <div>
        <SectionHeader onKeyPress={this.onHeaderClick} onClick={this.onHeaderClick} role="button" tabIndex={0}>
          {renderSectionHeader(section, index, open)}
        </SectionHeader>
        <SectionContent height={height} ref={this.sectionRef}>
          {this.renderItems()}
        </SectionContent>
        {renderSectionFooter(section, index)}
      </div>
    );
  }
}

export default class SectionList extends PureComponent {
  static defaultProps = {
    sectionKeyExtractor: section => section.id,
  };

  static propTypes = {
    data: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    sectionKeyExtractor: PropTypes.func,
  };

  render() {
    const { data, sectionKeyExtractor, ...other } = this.props;

    return data.map((section, index) => (
      <Section key={sectionKeyExtractor(section)} index={index} section={section} {...other} />
    ));
  }
}

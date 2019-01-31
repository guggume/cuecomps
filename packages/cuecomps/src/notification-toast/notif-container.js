import React, { PureComponent } from 'react';
import { NotificationToast, Button } from '..';

export default class NotificationToastContainer extends PureComponent {
  state = {
    message: 'hello world',
  };

  hideToastFunc = () => {
    const { message } = this.state;

    this.setState({
      message: message ? '' : 'hello world',
    });
  };

  onBtnClick = () => {
    const { message } = this.state;

    this.setState({
      message: message ? '' : 'hello world',
    });
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <NotificationToast hideToast={this.hideToastFunc} message={message} />
        <Button label="Reinstall Modal" onClick={this.onBtnClick} />
      </div>
    );
  }
}

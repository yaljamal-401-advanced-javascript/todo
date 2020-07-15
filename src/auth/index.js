/* eslint-disable no-useless-constructor */
import React from 'react';
import { SettingsContext } from '../context/data.js';
import Show from '../show/index.js';

class Auth extends React.Component {
  constructor(props) {
    super(props);
  }
  static contextType = SettingsContext;
  render() {
    let okToRender = false;
    try {
      okToRender =
        this.context.loggedIn &&
        (this.props.capability
          ? this.context.user.capabilities.includes(this.props.capability)
          : true);
    } catch (e) {
      console.log('Not Authorized', e.message);
    }
    return (
      <Show condition={okToRender}>{this.props.children}</Show>
    );
  }
}
export default Auth;

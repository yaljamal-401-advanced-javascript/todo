import React from 'react';
import { ToggleContext } from '../context/hideShow';
import Button from 'react-bootstrap/Button';
class Content extends React.Component {

  static contextType = ToggleContext;

  render() {
    return (
      <>
        <Button variant="primary" size="lg" onClick={this.context.toggleStatus} className="hideShow">
          {this.context.status === 'show' ? 'hide' : 'show'} complete items
        </Button>{' '}
        {/* <button onClick={this.context.toggleStatus}>
          {this.context.status === 'show' ? 'hide' : 'show'} complete items
        </button> */}
      </>
    );
  }
}
export default Content;

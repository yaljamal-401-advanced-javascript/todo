import React from 'react';

import SittingsContext from './context/data.js';
import ToDo from './components/todo/todo-connected';

export default class App extends React.Component {
  render() {
    return (
      <>
        <SittingsContext>
          <ToDo />
        </SittingsContext>
      </>
    );
  }
}
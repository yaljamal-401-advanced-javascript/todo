import React from 'react';

// import ToDo from './components/todo/todo.js';
import ToDo from './components/todo/todo-connected';

export default class App extends React.Component {
  render() {
    return (
      <>
        <ToDo />
      </>
    );
  }
}
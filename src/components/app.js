import React, { Component } from 'react';
import UserList from './user_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <UserList />
      </div>
    );
  }
}

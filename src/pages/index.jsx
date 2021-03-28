import React, { Component } from 'react';
import List from '../component/List';
import Search from '../component/Search';
import './index.less';

export default class index extends Component {
  state = { users: [] }
  saveUsers = (users) => {
    return (
      this.setState({ users })
    )
  }
  render() {
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers} />
        <List users={this.state.users} />

      </div>
    )
  }
}


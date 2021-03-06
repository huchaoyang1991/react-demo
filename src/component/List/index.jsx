import React, { Component } from 'react';

export default class List extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="row">{
        this.props.users.map((userObj) => {
          return (<div key={userObj.id} className="card">
            <a href={userObj.html_url} target="_blank">
              <img src={userObj.avatar_url} style={{ width: '100px' }} />
            </a>
            <p className="card-text">{userObj.login}</p>
          </div>)
        })
      }

      </div>
    )
  }
}

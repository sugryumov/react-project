import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import UserList from '../UsersList/'
import User from '../User/'

class UserContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })

    try {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (res.status === 200) {
          this.setState({
            users: res.data,
            isLoading: false
          });
        }
      })
    } catch (err) {
      console.log(err.massage)
    }
  }

  render() {
    return (
      <>
        <Route 
          path={ '/users' }
          exact
          render={
            () =>
              <UserList userList={ this.state.users } isLoading={ this.state.isLoading }
              />
          }
        />
        <Route
          path={'/users/:id'}
          exact
          render={(props) => {
            const userId = +props.match.params.id;
            const selectedUser = this.state.users.find(user => user.id === userId);

            return <User selectedUser={ selectedUser }/>
          }}
        />
      </>
    )
  }
}

export default UserContainer;

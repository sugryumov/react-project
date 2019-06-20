import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getUsers from '../../actions/user';
import User from '../User/';
import './UserList.css';

class UserContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   const userListStorage = sessionStorage.getItem('userList');

  //   if (typeof userListStorage === 'undefined' || userListStorage === null) {
  //     this.props.actionGetUsers();
  //   }
  // }

  render() {
    return (
      <>
        <Route path={ '/users' } exact render={ () => {
          return (
            <section className="users">
              <div className="container">
                <h1 className="users__title">Пользователи</h1>
                <div className="user__list">
                  { this.props.isLoading && <span>Loading...</span> }

                  { this.props.user.map((user, index) => {
                    return (
                      <div className="user__item" key={ index }>
                        <p className="user__info">Name: { user.name }</p>
                        <p className="user__info">Login: { user.username }</p>
                        <p className="user__info">Email: { user.email }</p>

                        <Link to={ '/users/' + user.username } className="link">Перейти в профиль</Link>
                      </div>
                    )
                  })
                  }
                </div>
              </div>
            </section>
          )
        }}/>

        <Route
          path={'/users/:username'}
          exact
          render={ (props) => {
            const userId = props.match.params.username;
            console.log(userId)
            const selectedUser = this.props.user.find(user => user.username === userId);
            return <User selectedUser={ selectedUser }/>
          }}
        />
      </>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  isLoading: state.user.isLoading
});

const mapDespatchToProps = dispatch => ({
  actionGetUsers: bindActionCreators(getUsers, dispatch)
})

export default connect(mapStateToProps, mapDespatchToProps)(UserContainer);
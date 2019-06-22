import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './User.css';

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const userId = this.props.match.params.username;
    const selectedUser = this.props.user.find(user => user.username === userId);
    return(
      <div className="user-page">
        <div className="container">
          <h1 className="user-page__title">{ selectedUser.name }</h1>
          <div className="user__info--wrap">
            <p className="user__info">Login: { selectedUser.username }</p>
            <p className="user__info">Email: { selectedUser.email }</p>
          </div>
  
          <Link className="link" to={ '/users' }>К списку пользователей</Link>
          <Link className="link user__link" to={'/'}>На главную</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});


export default connect(mapStateToProps)(User);

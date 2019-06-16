import React from 'react';
import { Link } from 'react-router-dom';

import './User.css';

function User(props) {
  console.log(props)
  return(
    <div className="user-page">
      <div className="container">
        <h1 className="user-page__title">{ props.selectedUser.name }</h1>
        <div className="user__info--wrap">
          <p className="user__info">Email: { props.selectedUser.email }</p>
          <p className="user__info">Phone: { props.selectedUser.phone }</p>
        </div>

        <Link className="link" to={ '/users' }>К списку пользователей</Link>
        <Link className="link user__link" to={'/'}>На главную</Link>
      </div>
    </div>
  )
}

export default User;
import React from 'react';

import './User.css';

function User(props) {
  return(
    <div className="user__item">
      <p className="user__info">Name: { props.user.name }</p>
      <p className="user__info">Email: { props.user.email }</p>
      <p className="user__info">Phone: { props.user.phone }</p>
    </div>
  )
}

export default User;

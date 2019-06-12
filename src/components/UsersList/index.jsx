import React from 'react';
import { Link } from 'react-router-dom';

import './UserList.css';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="users">
        <div className="container">
          <h1 className="users__title">Пользователи</h1>
          <div className="user__list">
            { this.props.isLoading && <span>Loading...</span> }
            { this.props.userList.map((user, index) => {
              return (
                <div className="user__item" key={ index }>
                  <p className="user__info">Name: { user.name }</p>
                  <p className="user__info">Email: { user.email }</p>
                  <p className="user__info">Phone: { user.phone }</p>

                  <Link to={'/users/' + user.id} className="link">Перейти в профиль</Link>
                </div>
              )
            })
            }
          </div>
        </div>
      </section>
    )
  }
}

export default UserList;

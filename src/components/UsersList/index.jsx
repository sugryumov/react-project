import React from 'react';
import axios from 'axios';

import './UserList.css';

class UserList extends React.Component {
  constructor(props) {
    super(props);

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
      <section className="users">
        <div className="container">
          <h2 className="users__title">Пользователи</h2>
          <div className="user__list">
            { this.state.isLoading && <span>Loading...</span> }
            { this.state.users.map((user) => {
                return (
                  <div className="user__item">
                    <p className="user__info" key={ user.id }>Name: { user.name }</p>
                    <p className="user__info" key={ user.id }>Email: { user.email }</p>
                    <p className="user__info" key={ user.id }>Phone: { user.phone }</p>
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

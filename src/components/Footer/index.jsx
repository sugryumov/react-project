import React from 'react';
import axios from 'axios'

import './Footer.css'

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    }
  }

  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(res => {
  //       const people = res.data;
  //       this.setState({ people });

  //       console.log(res)
  //     })
  // }

  render() {
    return (
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</div>
          <p className="footer__copyright">&copy; copyright name 2019</p>
        </div>

        <ol>
            { this.state.people.map(person => <p>{person.name}</p>)}
          </ol>
      </footer>
    )
  }
  
}

export default Footer;

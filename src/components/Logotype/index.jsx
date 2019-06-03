import React from 'react';

import './Logotype.css'

class Logotype extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <a href="#" className="header__logo">logotype {this.props.counter}</a>
    )
  }
}

export default Logotype;

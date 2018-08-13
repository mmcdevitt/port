import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render () {
    const classes = this.props.showModal ? 'cross' : ''

    return (
      <header>
        <div className="logo">
          <Link to="/"><span className="bold">M / W / M</span></Link>
        </div>
        <div className={`menu ${classes}`} onClick={this.props.toggleMenu}>
          <span></span>
          <span className="short"></span>
        </div>
      </header>
    )
  }
}

export default Header;
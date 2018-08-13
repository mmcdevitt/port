import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PublicRoutes from './router';
import MenuModal from './components/MenuModal/MenuModal';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isPaneOpen: false,
    }
  }

  toggleMenu = () => {
    this.setState({
      isPaneOpen: !this.state.isPaneOpen
    })
  }

  render() {
    return (
      <Layout>
        <MenuModal showModal={this.state.isPaneOpen} back={this.toggleMenu}>
          <ul onClick={this.toggleMenu} className="menu-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a href="mailto:michael.w.mcdevitt@gmail.com">Contact</a></li>
          </ul>
        </MenuModal>
        <Header showModal={this.state.isPaneOpen} toggleMenu={this.toggleMenu}/>
        <PublicRoutes />
        <Footer />
      </Layout>
    );
  }
}

export default App;

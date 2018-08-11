import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="logo">
            <span className="bold">M / W / M</span>
          </div>
          <div className="menu">
            <span></span>
            <span className="short"></span>
          </div>
        </header>
        <div className="content">
          <div className="left">
            <span className="hello">Hello -</span>
            <h1>
              I'm <strong>Michael W McDevitt</strong> a passionate <strong>Software Engineer</strong> & an eye for <strong>Minimalistic Design</strong>.
            </h1>
            <h1>I'm based in <strong>NYC</strong>, currently working <strong>Nowhere</strong>. But, I'd love to work with <strong>You</strong>. So, let's <strong>Connect</strong>.</h1>
          </div>
        </div>
        <footer>
          <div className="footer-links">
            <ul>
              <li><a className="github" href="https://www.github.com/mmcdevitt" target="_blank">github</a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/in/michaelwmcdevitt" target="_blank">linkedin</a></li>
              <li><a className="linkedin" href="mailto:michael.w.mcdevitt@gmail.com">email</a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

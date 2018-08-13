import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <footer>
          <div className="footer-links">
            <ul>
              <li><a className="github" href="https://www.github.com/mmcdevitt" target="_blank">github</a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/in/michaelwmcdevitt" target="_blank">linkedin</a></li>
              <li><a className="gmail" href="mailto:michael.w.mcdevitt@gmail.com">gmail</a></li>
            </ul>
          </div>
        </footer>
        )
    }
}

export default Footer;
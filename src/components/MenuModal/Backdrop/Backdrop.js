import React from 'react'
import './Backdrop.css'

class Backdrop extends React.Component {
  render() {
    return this.props.showModal ? (
      <div onClick={this.props.back} className="backdrop" />
    ) : null
  }
}

export default Backdrop;
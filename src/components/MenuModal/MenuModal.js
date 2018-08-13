import React from 'react'
import Backdrop from './Backdrop/Backdrop'

import './MenuModal.css'

class MenuModal extends React.Component {
  render() {
    const {back, showModal, children} = this.props
    const classes = showModal ? 'open' : 'close'

    return (
      <div className="menu-modal">
        <Backdrop back={back} showModal={showModal} />
        <div className={`aside-modal ${classes}`}>
          {children}
        </div>
      </div>
    )
  }
}

export default MenuModal;
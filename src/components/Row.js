import React from 'react';
import CellData from './CellData';

class Row extends React.Component {
  renderCells () {
    const { row } = this.props

    return Array(this.props.columns)
    .fill(null)
    .map((_, idx) =>
      <CellData
        key={idx}
        row={row}
        col={idx}
        value=""
      />
    )
  }

  render () {
    return (
      <tr>
        { this.renderCells() }
      </tr>
    )
  }
}

export default Row;
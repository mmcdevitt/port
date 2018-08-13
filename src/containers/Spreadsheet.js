import React from 'react';
import Row from '../components/Row';
import Table from '../components/Table';

class Spreadsheet extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      rows: 5,
      columns: 7,
      cells: [],
    }
  }

  componentDidMount () {
    const {rows, columns} = this.state;

    this.generateCells(rows, columns)
  }

  generateCells = (rows, cols) => {
    const grid = new Array(rows)
  
    for (let i = 0; i < rows; i++) {
      grid[i] = Array.from({length: cols}).map(() => {
        return { value: '' }
      })
    }

    this.setState({
      cells: grid
    })
  }

  renderRows () {
    const { cells } = this.state;

    return cells.map((row, i) => {
      return (
        <Row
          key={i}
          row={i}
          columns={this.state.columns}
        />
      )
    })
  }

  render () {
    console.log(this.state)
    return (
      <Table>
         { this.renderRows() }
      </Table>
    )
  }
}

export default Spreadsheet;
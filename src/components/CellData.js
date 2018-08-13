import React from 'react';

export const genCharArray = (charA, charZ) => {
    var arr = [], 
            i = charA.charCodeAt(0), 
            j = charZ.charCodeAt(0);
  
    for (; i <= j; ++i) {
       arr.push(String.fromCharCode(i));
    }
  
    return arr;
  }
  
  export const header = (idx) => {
    if (idx < 26) {
      return genCharArray('a', 'z')[idx]
    } else {
      return genCharArray('a', 'z')[Math.floor(idx / 26) - 1] + genCharArray('a', 'z')[idx % 26]
    }
  }

class CellData extends React.Component {
  constructor (props) {
    super (props)
    const { row, col } = props;
    const isLeftCell = col === 0 && row > 0
    const isTopCell = row === 0 && col > 0
    const value = (isLeftCell && row) || (isTopCell && header(col - 1)) || ''


    this.state = {
      value,
      mathValue: null,
      editable: false,
    }

  }

  renderCell () {
    const { value, editable, mathValue } = this.state;

    switch (editable) {
      case true:
        return (
          <input
            onChange={this.onChangeEvent}
            autoFocus
            type="text"
            value={value}
          />
        );
      default:
        return (
          <span>{mathValue ? mathValue : value}</span>
        )
    }
  }

  selectedClass = () =>  {
    return 'cell' + ( this.props.selected ? ' selected' : '' )
  }

  editableClass = () =>  {
    return this.selectedClass() + ( this.state.editable ? ' editable' : '' )
  }

  readOnlyClass = (row) =>  {
    return this.editableClass() + ( row === 0  ? ' read-only' : '' );
  }

  defineClasses = (row, col) =>  {
    return this.readOnlyClass(row) + ( col === 0  ? ' col-read-only' : '' );
  }

  render () {
    const { row, col, } = this.props;

    return (
      <td
        className={this.defineClasses(row, col)}
      >
        {this.renderCell()}
      </td>
    )
  }
}

export default CellData;
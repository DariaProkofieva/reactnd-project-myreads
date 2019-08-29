import React from 'react'
import Shelf from './Shelf'

class Bookcase extends React.Component {
  render() {
    return (
      <div>
        <Shelf name='Currently reading' booksList={this.props.books} update={this.props.update}/>
        <Shelf name='Want to read' booksList={this.props.books} update={this.props.update}/>
        <Shelf name='Read' booksList={this.props.books} update={this.props.update}/>
      </div>
    )
  }
}

export default Bookcase;

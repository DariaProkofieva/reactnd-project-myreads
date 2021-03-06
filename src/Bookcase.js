import React from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

class Bookcase extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <Shelf shelfType='currentlyReading' name='Currently reading' booksList={this.props.booksList} update={this.props.update}/>
          <Shelf shelfType='wantToRead' name='Want to read' booksList={this.props.booksList} update={this.props.update}/>
          <Shelf shelfType='read' name='Read' booksList={this.props.booksList} update={this.props.update}/>
          <Link to='/search' className="open-search"></Link>
      </div>
    )
  }
}

export default Bookcase;

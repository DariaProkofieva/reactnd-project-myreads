import React from 'react'
import Book from './Book'

class Shelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.booksList.filter((bookDetail) =>
               	bookDetail.shelf === this.props.shelfType
                ).map(bookDetail => (
                  <li key={bookDetail.id}>
                   <Book bookDetail={bookDetail}
                         booksList={this.props.booksList}
                         update={this.props.update}/>
                  </li>))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;

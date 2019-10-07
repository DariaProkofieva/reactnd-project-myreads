import React from 'react'
import Change from './Change'


class Book extends React.Component {

  render() {
    const withoutThumbnail=this.props.bookDetail.imageLinks ? this.props.bookDetail.imageLinks.thumbnail : '';
    const withoutAuthor=this.props.bookDetail.authors ? this.props.bookDetail.authors.join(" , ") : '';
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
               style={{ width: 128,
                        height: 188,
                        backgroundImage: `url("${withoutThumbnail}")`}}></div>
          <Change booksList={this.props.books}
                  update={this.props.update}
                  selectShelf={this.props.bookDetail.shelf}
                  searchedBooks={this.props.searchedBooks}
                  bookDetail={this.props.bookDetail}/>
        </div>
        <div className="book-title">{this.props.bookDetail.title}</div>
        <div className="book-authors">{withoutAuthor}</div>
      </div>
    )
  }
}

export default Book

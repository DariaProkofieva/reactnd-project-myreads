import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends React.Component {
  state = {
    query: '',
    searchedBooks: []
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
    if  (query){
       BooksAPI.search(query).then((searchedBooks) => {
         if (searchedBooks.error){
           this.setState ({searchedBooks:[]});
         }else{
           this.setState(() => ({searchedBooks}));
         }
       })
     } else {
       this.setState ({searchedBooks:[]});
     }
  }
  render() {
    var that = this;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
                   placeholder="Search by title or author"
                   value={this.state.query}
                   onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
           { this.state.searchedBooks.map((searchedBook) => (
              <li key={searchedBook.id}>
              <Book bookDetail={searchedBook}
                    searchedBooks={that.state.searchedBooks}
                    update={that.props.update}
                    booksList={that.props.booksList}/>
              </li>))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;

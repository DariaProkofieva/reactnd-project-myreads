import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookcase from './Bookcase'
import Search from './Search'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
  }

  state = {
    books: []
  }

  componentDidMount() {
    this.changeHandler()
  }

  changeHandler() {
    BooksAPI.getAll()
      .then((books) =>
        {
          this.setState(() => ({books}))
        }
      )
  }

  render() {
    return (
      <div className="app">
        <Bookcase booksList={this.state.books}
                  update={this.changeHandler}/>
        <Search booksList={this.state.books}
                  update={this.changeHandler}/>
      </div>
    )
  }
}

export default BooksApp

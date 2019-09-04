import React from 'react'
import * as BooksAPI from './BooksAPI'

class Change extends React.Component {
  constructor(props) {
    super(props);
    this.changeShelf = this.changeShelf.bind(this);
  }
  state={
    shelf:''
  }
  changeShelf = (bookDetail, shelfType) =>{
   BooksAPI.update(bookDetail, shelfType)
     .then(
     ()=> {
        this.props.update ();
          })
  }
  componentDidMount() {
    this.fetchBookShelfType()
  }
  fetchBookShelfType = () => {
    BooksAPI.get(this.props.bookDetail.id)
    .then( (book) => {
      this.setState(() => ({shelf:book.shelf}));
    })
  }
  changeValue = (e) =>{
    this.changeShelf(this.props.bookDetail, e.target.value)
  }
  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.shelf ||"none"} onChange={this.changeValue}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default Change;

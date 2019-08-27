import React from 'react'
import Shelf from './Shelf'

class Bookcase extends React.Component {
  render() {
    return (
      <div>
        <Shelf/>
        <Shelf/>
        <Shelf/>
      </div>
    )
  }
}

export default Bookcase;

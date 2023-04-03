import React from 'react'
import BookItems from './BooksItems'
import table1 from './table1.css'
const Books = (props) => {
    const books=props.books;
  return (
    <div>
      <table className='table1'>
      <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
        
            </tr> 
      </table>
        <BookItems book={books[0]}/>
        <BookItems book={books[1]}/>
        <BookItems book={books[2]}/>
        
    </div>
  )
}

export default Books
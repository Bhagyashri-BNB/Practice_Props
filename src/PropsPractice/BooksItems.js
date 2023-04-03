import React from 'react'
import table1 from './table1.css'
import Books from './Books'
const BooksItems = (props) => {
    // console.log(props)
    const book=props.book// this props.book refer to the <BookItems book={books[0]}/> this left hand side book
  return (
    <div>
        <table className='table1' > 
          
            <tr>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.price}</td>
            </tr>
            {/* <tr>
                <td>
                <label>{book.id}</label>
                <label>{book.name}</label>
                <label>{book.price}</label>
                </td>
            </tr> */}
        </table> 
        {/* <label>HOLA</label> */}
        
    </div>
  )
}

export default BooksItems
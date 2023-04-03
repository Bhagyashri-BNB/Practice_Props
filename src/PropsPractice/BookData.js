import React from 'react'
import Books from './Books'
const BookData = () => {
    const booksdata=[
        {
            id:101,
            name:'ABX',
            price:300
        },
        {
            id:102,
            name:'XYZ',
            price:400
        },
        {
            id:103,
            name:'PQR',
            price:450
        }
    ]
  return (
    <div>
         BookData
        <Books books={booksdata} />
    </div>

  )
}

export default BookData
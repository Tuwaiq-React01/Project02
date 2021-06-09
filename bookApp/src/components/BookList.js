import React, { Component } from 'react'
import BookCard from './BookCard'
export default class BookList extends Component {
    render() {
        return (
            <div className="list">
                {
                    this.props.books.map((book,i)=>{
                        return <BookCard key={book.id} info={book}/>
                    })
                }
                

               
            </div>
        )
    }
}

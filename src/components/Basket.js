import React from 'react'
import { connect } from 'react-redux';
import BasketItem from './BasketItem'

const Basket = ({books}) => {
    var allPrice = books.addedBooks.reduce((acc, cur) => {
        return +acc + +cur.price
    }, [])
    debugger;

    return(
        <React.Fragment>
            <h1>Корзина</h1>
            <ul class="collection">
                {books.addedBooks.map(book => <BasketItem key={book.id} book={book}/>)}
            </ul>
            <h1>Общая сумма: {allPrice > 0 && allPrice || 0} тг</h1>
        </React.Fragment>
)};

const mapStateToProps = state => {
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(Basket);
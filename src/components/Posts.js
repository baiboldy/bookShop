import React from 'react';
import Post from './Post';
import {connect} from 'react-redux';
import {addBook} from '../redux/actions';

const Posts = ({books, addBook}) => {
    var viewBooks = books.viewBooks;
    if (!viewBooks.length > 0) {
        return (
            <h1>Нету книг</h1>
        )   
    }
    return (
    <ul className='row' >
        {viewBooks.map(post => <Post post={post} key={post.id} addBook={addBook}/>)}
    </ul>
    )
};

    const mapStateToProps = state => {
        return {
            books: state.books
        };
    }

export default connect(mapStateToProps, {addBook })(Posts);
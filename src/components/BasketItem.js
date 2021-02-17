import React from 'react'

const BasketItem = ({book}) => {
    return (
        <React.Fragment>
            <li class="collection-item avatar">
            <span class="title">{book.title}</span>
            <p>{book.price}
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
            </li>
        </React.Fragment>
    );
}

export default BasketItem;
import React from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

export default ({post, addBook}) => {
    var onAddClick = (postItem) => {
        M.toast({html: `Книга ${postItem.title} добавлена в корзину`})
        addBook(post)
    }

    return (
        <div class="col l3 m6 s12">
          <div class="card small">
            <div class="card-content">
              <h5>Книга: {post.title}</h5>
              <p  class="grey-text text-darken-3 lighten-3">Цена: {post.price} тг</p>

            </div>
            <div class="card-action">
                <a onClick={() => onAddClick(post)} class="waves-effect waves-light btn">Добавить в корзину</a>
            </div>
          </div>
        </div>   
    )
}
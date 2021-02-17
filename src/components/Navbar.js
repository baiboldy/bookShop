import React, {useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';


const Navbar = ({changeContent}) => {
    useEffect(() => {
        M.AutoInit();
    });

    return (
        <div>
            <div class="navbar-fixed">
                <nav>
                    <div class="nav-wrapper">
                        <div class="container">
                            <a href="#!" class="brand-logo">Читайка</a>
                            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                                <i class="material-icons">menu</i>
                            </a>
                            <ul class="right hide-on-med-and-down">
                                <li><a onClick={() => changeContent('main')}>Книги</a></li>
                                <li><a onClick={() => changeContent('basket')}>Корзина</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        <ul class="sidenav" id="mobile-demo">
            <li><a onClick={() => changeContent('main')}>Книги</a></li>
            <li><a onClick={() => changeContent('basket')}>Корзина</a></li>
        </ul>
        </div>
    )
}

export default Navbar;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'materialize-css/dist/css/materialize.min.css'
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './redux/rootReducer'
import App from './components/App';

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

import {combineReducers} from 'redux'
import {postReducer} from './postReducer'
import {navReducer} from './navReducer'

export const rootReducer = combineReducers({
    books: postReducer,
    nav: navReducer
});
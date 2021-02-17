import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Posts from './Posts'
import {changeContent} from '../redux/actions'
import Basket from './Basket'

const App = ({nav, changeContent}) => {
    return (
        <React.Fragment>
            <Navbar changeContent={changeContent}/>
            <div className='container'>
                {nav.page == 'main' && <Posts/>}
                {nav.page == 'basket' && <Basket/>}
            </div>
        </React.Fragment>
    )
}
const mapStateToProps = state => {
    return {
        nav: state.nav
    };
}
export default connect(mapStateToProps, {changeContent})(App);
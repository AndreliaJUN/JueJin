import React, { Component } from 'react';
import Header from './common/header/index'
import store from './store'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detial from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component {
    render () {
        return (
            <Provider store={ store }>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path='/' exact component={ Home }></Route>
                        <Route path='/login' exact component={ Login }></Route>
                        <Route path='/detail/:id' exact component={ Detial }></Route>
                        <Route path='/write' exact  component={Write}></Route>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;

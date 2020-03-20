import React ,{ Fragment }from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from './style.js';
import { IconfontStyle } from './static/iconfont/iconfont';
import App from './App';

ReactDOM.render(
    <Fragment>
    <GlobalStyle />
    <IconfontStyle />
    <App />
  </Fragment>, 
    
    document.getElementById('root'));


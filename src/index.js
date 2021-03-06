import 'core-js/es6/';
import React from 'react';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

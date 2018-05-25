import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './libs/fontawesome/web-fonts-with-css/css/fontawesome-all.min.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const mountApp = document.getElementById('root');

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    mountApp
);

registerServiceWorker();

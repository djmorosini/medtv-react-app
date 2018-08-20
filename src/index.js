import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Main from './MainRouter'

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

registerServiceWorker();
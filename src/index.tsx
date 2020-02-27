import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MainRoutes from './app/routes/';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<MainRoutes />, document.getElementById('root'));
serviceWorker.unregister();

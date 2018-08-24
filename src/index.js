import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/login/login';
import registerServiceWorker from './registerServiceWorker';
import SiderDemo from "./pages/layout";
ReactDOM.render(<SiderDemo />, document.getElementById('root'));
registerServiceWorker();

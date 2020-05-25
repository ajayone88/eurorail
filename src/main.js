require('webpack-hot-middleware/client?reload=true');
require('./main.css');

import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';
import App from "./App";
import "./App.css";

ReactDOM.render(
    <App />,
    document.getElementById('react-root')
);
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

//Dev Middleware
const webpack = require('webpack');
const config = require('../config/webpack.config');
const compiler = webpack(config);
const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler,
    config.devServer
);
app.use(webpackDevMiddleware);

//Hot Middleware
const webpackHotMiddleware = require('webpack-hot-middleware')(
    compiler
);
app.use(webpackHotMiddleware);

//Static Middleware
const staticMiddleware = express.static('dist');
app.use(staticMiddleware);

app.listen(port, ()=>{
   console.log('This Application is listening at Port : - '+ port);
});
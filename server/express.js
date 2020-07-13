import express from 'express';
import path from 'path';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import config from '../config/webpack.config';

const app = express();
const port = process.env.PORT;

//Dev Middleware
const compiler = webpack(config);
const devInstance = devMiddleware(compiler,config.devServer);
app.use(devInstance);

//Hot Middleware
const hotInstance = hotMiddleware(compiler);
app.use(hotInstance);

//Static Middleware
const staticMiddleware = express.static(path.resolve(__dirname, '../dist'));
app.use(staticMiddleware);

app.listen(port, ()=>{
   console.log(`Application is up and running on port ${port}`);
});
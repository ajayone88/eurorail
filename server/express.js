import express from 'express';
const app = express();

const staticMiddleware = express.static('dist');
app.use(staticMiddleware);

const PORT = 4200;
app.listen(PORT, ()=>{
   console.log('This Application is listening at Port : - '+ PORT);
});
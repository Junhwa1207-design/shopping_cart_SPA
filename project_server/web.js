import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import history from 'connect-history-api-fallback';

import vueRouter from './routers/index.js';
import userApi from './api/user/user_sign.js';
import goodsApi from './api/Goods/goods.js';
import cartApi from './api/Cart/cart.js';

require('dotenv').config();
const app = express();
const port = 3000;
//express
//app.use(ipfilter(ips));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev')); // log request
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.static("/Users/junhwajung/Desktop/Vue_ShoppingMall-master/upload"));
app.use(history({
    index: '/'
}));
process.env.NODE_ENV = 'dev';
console.log(process.env.NODE_ENV);


app.use('/', vueRouter);
app.use('/api/user', userApi);
app.use('/api/goods', goodsApi);
app.use('/api/cart', cartApi);

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})
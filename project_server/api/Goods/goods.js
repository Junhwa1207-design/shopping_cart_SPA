import { Router } from 'express';
const router = Router();
import { MybatisMapper, format } from '../../mysql/mysql.js';
import { Method } from '../httpMethod.js';
require('dotenv').config();
import path from 'path';
MybatisMapper.createMapper([path.join(__dirname, '../../mappers/goods/GoodsMapper.xml')]);

var mapperId = 'goodsMapper';


router.get('/category/:reqData', async (req, res) => {
    try {
        const reqData = req.params;
        console.log('2222222');
        console.dir(reqData);
        let result = await Method(mapperId, 'getCategory', reqData, format);
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});


router.post('/getGoodsList', async (req, res) => {
    let reqData = req.body;
    if (!reqData.hasOwnProperty('order')){
        reqData.order = null;
    }
    console.log(reqData);
    try {
        let result = await Method(mapperId, 'getGoodsList', reqData, format);
        let result1 = await Method(mapperId, 'getGoodsListCount', reqData, format);
        res.status(200).send({result, result1});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});


router.post('/getCategoryList', async (req, res) => {
    try {
        let result = await Method(mapperId, 'getCategoryList', null, format);
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

router.get('/getGoodsOne/:gds_num', async (req,res) => {
    let reqData;
    console.log(req.params);
    
    if (req.params.gds_num != null) {
        reqData = req.params;
    } else {
        reqData = req.params.gds_num = null;
    }
    try {
        let result = await Method(mapperId,'getGoodsOne', reqData, format);
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});


export default router;
import { Router } from 'express';
const router = Router();
require('dotenv').config();
import jwt from 'jsonwebtoken';
import { jwtObj } from '../../config/jwt.js';

router.post('/login', (req,res) => {
    // FAKE USER
    let results = [{
        USER_ID:'test',
        USER_PW: '1234',
        USER_NAME: 'JUNA',
        USER_VERIFY: '0',
        USER_ADDR1: '',
        USER_ADDR2: '',
        USER_PHONE: '',
        ISSNS:'',
        USER_THUMBNAIL:''
    }]
    let resultData = {};
    resultData.searchUser = true;
    const token = jwt.sign({
        USER_ID: results[0].USER_ID,  
    },jwtObj.secret, {
        expiresIn: '300m' 
    });
    res.cookie('token', token);
    res.cookie('verify', results[0].USER_VERIFY);
    res.cookie('user', JSON.stringify(results[0]));
    return res.status(200).send({
        resultData,
        token,
        results
    }); 
});

export default router;
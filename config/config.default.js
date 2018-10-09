'use strict';
const path = require('path');


const {ETH_POINT, PRIVATE_KEY, HOST_POINT} = process.env;
module.exports = appInfo => {
    const config = exports = {};
    config.middleware = ['errorHandler'];

    config.security = {
        csrf: {
            queryName: '_csrf',
            bodyName: '_csrf',
            headerName: 'x-csrf-token',
            ignoreJSON: true
        },
        domainWhiteList: ['http://localhost:7001', "http://127.0.0.1:7001", "http://faucet.coinxp.io"]
    };

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.nj': 'nunjucks',
        },
        root: [
            path.join(appInfo.baseDir, 'app/view'),
            path.join(appInfo.baseDir, 'path/to/another'),
        ].join(',')
    };

    config.keys = appInfo.name + '_1538988032206_7794';

    config.host = HOST_POINT;

    config.ether = {
        signer: '0x5D6b33755202d5F3FdA82DABb826fBC596a45CD9',
        amount: 100000,
        ethPoint: ETH_POINT,
        privateKey: PRIVATE_KEY
    };

    return config;
};
/**
 set ETH_POINT=http://192.168.0.171:8545
 set PRIVATE_KEY=133AF55264AD0C3444E89094C130AE935C22988766D36A4697B4693B04D6A908
 set HOST_POINT=http://127.0.0.1:7001
 */
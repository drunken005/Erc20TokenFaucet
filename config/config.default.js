'use strict';
const path = require('path');

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

    config.ether = {
        signer: '0x5D6b33755202d5F3FdA82DABb826fBC596a45CD9',
        amount: 100000
    };

    return config;
};
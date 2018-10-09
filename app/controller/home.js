'use strict';

const tokens = require('../lib/tokens');
module.exports = app => {
    class HomeController extends app.Controller {
        async index() {
            let {ctx, config} = this;
            const data = {tokens, amount: config.amount, hostUrl: config.host};
            await ctx.render('index.tpl', data);
        }

        async create() {
            let {ctx, config} = this;
            let data = ctx.request.body;
            ctx.validate({
                token: 'string',
                address: 'string'
            }, data);
            let hash = ctx.app.erc20Token.transfer(data.token, data.address, config.ether.amount);
            console.log('hash: ', hash);
            this.success(hash);
        }
    }

    return HomeController;
};
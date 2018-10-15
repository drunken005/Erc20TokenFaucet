'use strict';

const tokens = require('../lib/tokens');
const configs = require('../lib/config');
module.exports = app => {
    class HomeController extends app.Controller {
        async index() {
            let {ctx, config} = this;
            const data = {tokens, amount: config.ether.amount, hostUrl: configs.hostPoint};
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
            this.success(hash);
        }
    }

    return HomeController;
};
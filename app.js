const getWeb3Connection = require('./app/lib/web3/web3_connection');
const Erc20Token = require('./app/lib/erc20_token');
module.exports = app => {
    app.beforeStart(async () => {
        let {ether} = app.config;
        let web3;
        try {
            web3 = getWeb3Connection(ether.ethPoint);
        } catch (e) {
            throw new Error(e);
        }
        app.erc20Token = new Erc20Token(web3, ether.privateKey, ether.signer);
    });


    class BaseController extends app.Controller {
        success(data) {
            this.ctx.body = {
                success: true,
                msg: 'OK',
                statusCode: 200,
                data,
            };
        }

        showPage(page) {
            this.ctx.body = page;
        }

        notFound(msg) {
            msg = msg || 'not found';
            this.ctx.throw(404, msg);
        }
    }

    app.Controller = BaseController;
};
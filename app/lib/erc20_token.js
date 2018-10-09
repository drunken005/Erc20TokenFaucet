"use strict";

const ERC20Interface = require('./contract/ERC20Interface.sol.js');
const EthereumTx = require('ethereumjs-tx');

class Erc20Token {
    constructor(web3, privateKey, signer) {
        this.web3 = web3;
        this.privateKey = Buffer.from(privateKey, 'hex');
        this.signer = signer;
        this.tokenContract = web3.eth.contract(ERC20Interface.abi);
        this.nonce = web3.eth.getTransactionCount(signer);
    }

    transfer(erc20Contract, toAddress, amount) {
        let {web3, signer, privateKey, nonce} = this;

        if (!web3.isAddress(erc20Contract)) {
            throw new Error('erc20 contract error!')
        }

        if (!web3.isAddress(toAddress)) {
            throw new Error('you input address error!')
        }

        let token = this.tokenContract.at(erc20Contract);
        let data = token.transfer.getData(toAddress, web3.toWei(amount), {from: signer});
        let gasPrice = web3.eth.gasPrice;
        const txObj = {
            to: token.address,
            value: 0,
            data: data,
            nonce: nonce,
            gasPrice: web3.toHex(gasPrice),
            gasLimit: web3.toHex(4000000)
        };
        const tx = new EthereumTx(txObj);
        tx.sign(privateKey);
        let signedTx = '0x' + tx.serialize().toString('hex');
        try {
            const txHash = web3.eth.sendRawTransaction(signedTx);
            this.nonce++;
            return txHash;
        } catch (e) {
            this.nonce = web3.eth.getTransactionCount(signer);
            throw new Error(e);
        }
    }
}

module.exports = Erc20Token;
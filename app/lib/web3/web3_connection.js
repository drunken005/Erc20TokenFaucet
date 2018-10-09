function getWeb3Connection(ethNode) {
    const Web3 = require('web3');
    const web3 = new Web3();
    try {
        web3.setProvider(new web3.providers.HttpProvider(ethNode));
    } catch (e) {
        console.log('.........................e', e);
    }

    if (!web3.isConnected()) {
        throw "Etherweb3 is not connected!";
    } else {
        console.log('connected web3 ' + ethNode);
    }
    let sync = web3.eth.syncing;
    if (sync) {
        console.log("Still syncing ...");
        console.log(sync);
    }
    return web3;
}

module.exports = getWeb3Connection;
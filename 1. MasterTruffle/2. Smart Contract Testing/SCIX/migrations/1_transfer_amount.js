const transferAmount = artifacts.require("transferAmount");

module.exports = function (deployer, _network, accounts) {
    deployer.deploy(transferAmount, accounts[0]);
}
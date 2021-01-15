const Migrations = artifacts.require("Migrations");
const DaiToken = artifacts.require("DaiToken");
const DappToken = artifacts.require("DappToken");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(DaiToken);
  deployer.deploy(DappToken);
};

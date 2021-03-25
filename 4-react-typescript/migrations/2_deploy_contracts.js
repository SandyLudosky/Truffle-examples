var SimpleStorage = artifacts.require("SimpleStorage");
var Greetings = artifacts.require("Greetings");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Greetings, "Welcome to the Truffle box: react & redux");
};

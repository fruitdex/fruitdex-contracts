const Timelock = artifacts.require("Timelock");
const FruitToken = artifacts.require("Fruit");
const Vitamin = artifacts.require("VitaminToken");
const MasterChef = artifacts.require("MasterChef");
let admin = "0xD9846B83bAb418bf2B9bdE15507E760a85F8C4bc"
let startBlock = 5881529
let timelockEta = 46800   
module.exports = function(deployer) {
  // 1st deployment
	deployer.deploy(Timelock, admin, timelockEta ).then(function(zero){
	
	return deployer.deploy(FruitToken).then(function() {
		return deployer.deploy(Vitamin, FruitToken.address).then(function() {
			return deployer.deploy(MasterChef, FruitToken.address, Vitamin.address, admin, "1000000000000000000", startBlock)
		  
	  })
	  })
    })
};
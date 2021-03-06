const HDWalletProvider = require("@truffle/hdwallet-provider");
const provider = new HDWalletProvider({
	privateKeys: [""],
	providerOrUrl: "https://bsc-dataseed.binance.org/"
	
});
module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //

  
  networks: {
   development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*"
   },
   bsctest: {
    provider: () => provider,
    network_id: 97,
    timeoutBlocks: 200,
    skipDryRun: true
   },
   bsc: {
    provider: () => provider,
    network_id: 56,
    timeoutBlocks: 200,
    skipDryRun: true
   }
  },  
  compilers: {
    solc: {
      version: "0.6.12"
    }
  }
};

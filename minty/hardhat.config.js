require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.7.3",

    //defaultNetwork: 'localhost',
    defaultNetwork: 'rinkeby',
    networks: {
        hardhat: {},
        localhost: {},
        rinkeby: {
            url: `https://rinkeby.infura.io/v3/918324bac7924b7ea8bc1f32a9bf3098`,
            accounts: [`a8f45b06d108bc5d30f3883979302d46f627d19ac192931049d75c377bf818bf`],
            network_id: "*",
            chainId: 4,
            skipDryRun: true,
            timeoutBlocks: 200,
            confirmations: 2,
            gas: 4600000 
        }
    }
};


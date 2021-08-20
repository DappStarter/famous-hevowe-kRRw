require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy reflect noise social jazz civil army gift'; 
let testAccounts = [
"0xfd4e18a30feefc55ecaa17cfb3dd5182a293c812acd24c2a9bb8baf57a024031",
"0xdfb337ad448281c0a0ba5015327d1bd540d5d6c7766a73e125dc6214f6e5c0b2",
"0xec8ece3bba33d0777f95415a752c702ab91272a67aa140fe9f749696b247733e",
"0x420509c40a7f77289eee00f9e0acf2186bd14e0b5e273b236fb5de8b9daf841b",
"0xb45e4450cab27af3ab8c70286599750257bfe5e575a2273e480ba01f5d7c0285",
"0xf7e136d54ca9740511477979ae730bb1253f6ac771ebfaaefc4d2c153f213066",
"0x68b118e8df9cdb9e37185b19d3b8d82a632fe07008a8cdb1608f5d073d3f49c9",
"0x178403e60d53e829b6f542f34eaf4fa1e4f1e2c9d54e507f70ef4cf1094ef24a",
"0xb1da8dbe1052476553dcdca481a4cdad250214b7d7801748a432435b27af5f70",
"0x6ad6dcd8890982787aef8b7b5f446de8de045d3ce40341e5893cf291f85b99d2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


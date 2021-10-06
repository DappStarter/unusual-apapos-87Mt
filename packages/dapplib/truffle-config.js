require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth magic around idea knee slot giggle'; 
let testAccounts = [
"0xf1daa97f7317df86351d91434f48a2c247fd3300c2e96462c2194922d1bb8eb6",
"0x6dc627556365abafca71d48d428e64596fca881f17aa228abaeaf1ab8ef0ac7a",
"0x6b12cebcb2dae932789ccd60dbc25808319633df8c3473e885283563cd508207",
"0xfe8bb06712cf541a55354701d8a6e276fc98971b70ac7b20cf3ec4292c8d0dd9",
"0xd562c5dfd4d1f8160fbda82a0076332e7a70fbbcaff2a0b7c2795a2b5910b16c",
"0xf4a3980b48c9af825286f8da7f6a4b29dbd1017615cd522a530832db6fc200bd",
"0x69cebc0fe705bb2cae8f830e6e77d59fefff246a5be5ff89d2dd16e8ebd81382",
"0x94df3b46de145e4725b90673525585a1f533df0afdf938910f2d48f88efde5fc",
"0xffb6014d46a13f6aa32875bc4fbbb2be23ab78861867cbd623da79f1c2f7d8ed",
"0xcc588f044df85581462fb81abff185187869f91eeb1e5a658741b34a88bf8a4a"
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


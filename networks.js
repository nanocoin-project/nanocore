var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

// Use this to get reverse genesis/merkle.
//echo -n '203067d812254f72cdc20099b4a077a380597cf97638a88c4157620202b055ba' | dd conv=swab | rev


exports.livenet = {
  name: 'livenet',
  magic: hex('35702205'),
  addressVersion: 53,
  privKeyVersion: 153,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('000009300995579d9f14218582c5c40971553f9c72866aed216395fb3ee22dc9'),
    merkle_root: hex('57570a3af5e43e889a6ea3e665216c952b8580b63fc8abc87d3c8989165bb6bb'),
    height: 0,
    nonce: 314971,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1426352618,
    bits: 504365055
  },
  dnsSeeds: [
    'seed.nanocoin.io'
  ],
  defaultClientPort: 15150,
  lastPoWBlock: 50000
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('f2cdc0ef'),
  addressVersion: 111,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('000004659c877ea20b5c1b4e62846a8f2368731676d7d50a7d4a064ca15ead5d'),
    merkle_root: hex('03d4d5cc1505a77cc4d4275514360e84cceba0455caceba5f6bf8871ac81fa22'),
    height: 0,
    nonce: 980308,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1416351712,
    bits: 504365055,
  },
  dnsSeeds: [],
  defaultClientPort: 150150,
  lastPoWBlock: 50000
};

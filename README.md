# FollowDrop: Leveraging Social Networks for Tokenized Incentives

In the fast-growing DeFi space, community engagement is key. FollowDrop is here to incentivize and reward those who are actively participating and supporting our community. But we're not just another airdrop project; we have a unique twist.

By integrating with Lens Protocol, a decentralized social media platform, and Sismo, an on-chain proof generator, FollowDrop goes beyond the typical airdrop mechanics. We don't just check if a user holds our Governance Token; we also ensure they're actively following our community on social media. This dual-check system ensures our rewards go to the most engaged and active community members.

With FollowDrop, we're not just distributing tokens; we're building a community. Our users aren't just token holders; they're active participants in our ecosystem. We believe this will lead to a more robust, engaged community and a healthier token economy.

And the best part? It's all secured and verified on-chain. With FollowDrop, you can be confident in the transparency and fairness of our airdrop process.

Join us as we redefine community incentives in the DeFi space. FollowDrop, where social engagement meets token rewards.

## Usage

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) >= 18.15.0 (Latest LTS version)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [Foundry](https://book.getfoundry.sh/)

### Install contract dependencies

```bash
# updates foundry
foundryup
# install smart contract dependencies
forge install
```

### Launch a local fork chain

```bash
# in another terminal
# starts a local fork of Mumbai
yarn anvil
```

### Launch the local application

You can now launch your local dapp with the commands:

```bash
# in another terminal

# install frontend dependencies
cd front
yarn

# launch local application
yarn dev
```

The frontend is now available on http://localhost:3000/ and the contracts have been deployed on your local blockchain.
You can now experiment the user flow by going to your local frontend http://localhost:3000/.

### Deploy your Airdrop contract

With a private key, a RPC url and an etherscan api key:

```bash
forge script DeployAirdrop \
--rpc-url $RPC_URL \
--private-key "$PRIVATE_KEY" \
--broadcast \
--slow \
--etherscan-api-key "$ETHERSCAN_API_KEY" \
--verify \
--watch
```

With a mnemonic and a sender:

```bash
forge script DeployAirdrop \
--rpc-url $RPC_URL \
--mnemonics "$MNEMONIC" \
--sender $SENDER \
--broadcast \
--slow \
--etherscan-api-key "$ETHERSCAN_API_KEY" \
--verify \
--watch
```

### Run contract tests

Sismo Connect contracts are currently deployed on several chains.
You can find the deployed addresses [here](https://docs.sismo.io/sismo-docs/knowledge-base/resources/sismo-101).
You can then run tests on a local fork network to test your contracts.

```bash
## Run fork tests with goerli
forge test --fork-url https://rpc.ankr.com/eth_goerli

## Run fork tests with mumbai
forge test --fork-url https://rpc.ankr.com/polygon_mumbai

## Run fork tests with optimism
forge test --fork-url https://rpc.ankr.com/optimism

# you can aslo use the rpc url you want by passing an environment variable
forge test --fork-url $RPC_URL
```

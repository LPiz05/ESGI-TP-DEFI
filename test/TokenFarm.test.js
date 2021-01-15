const DaiToken = artifacts.require('DaiToken')
const DappToken = artifacts.require('DappToken')
const TokenFarm = artifacts.require('TokenFarm')

require('chai')
  .use(require('chai-as-promised'))
  .should()

function tokens(n) {
  return web3.utils.toWei(n, 'ether');
}

contract('TokenFarm', ([owner, investor]) => {
  let daiToken, dappToken, tokenFarm

  before(async () => {
    // Load Contracts

    // Transfer all Dapp tokens to farm (1 million)

    // Send tokens to investor
  })

  describe('Mock DAI deployment', async () => {
    it('has a name', async () => {
    // Todo
    })
  })

  describe('Dapp Token deployment', async () => {
    it('has a name', async () => {
      // Todo
    })
  })

  describe('Token Farm deployment', async () => {
    it('has a name', async () => {
      // Todo
    })

    it('contract has tokens', async () => {
      // Todo
    })
  })

})
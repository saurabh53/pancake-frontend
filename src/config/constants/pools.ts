import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 0,
  //   tokenName: 'CAKE',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   contractAddress: {
  //     97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
  //     56: '0x1C515985c6318550Afb5bC590f4f0843b977250A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://pancakeswap.finance/',
  //   harvest: true,
  //   tokenPerBlock: '10',
  //   sortOrder: 1,
  //   isFinished: false,
  //   tokenDecimals: 18,
  // },
  {
    sousId: 11,
    tokenName: 'MANY',
    stakingTokenName: QuoteToken.MANY,
    stakingTokenAddress: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    contractAddress: {
      97: '0x1C515985c6318550Afb5bC590f4f0843b977250A',
      56: '0x1C515985c6318550Afb5bC590f4f0843b977250A',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://manyswap.io/',
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    stakingFees: 0,
  },
  {
    sousId: 20,
    image: 'BNB',
    tokenName: 'MANY',
    stakingTokenName: QuoteToken.BNB,
    // stakingTokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    contractAddress: {
      97: '0xdf648fb2F3c9285E537EDE86337449d346c91CbA',
      56: '0xdf648fb2F3c9285E537EDE86337449d346c91CbA',
    },
    poolCategory: PoolCategory.BINANCE,
    projectLink: 'https://manyswap.io/',
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    stakingFees: 4,
  }
]

export default pools

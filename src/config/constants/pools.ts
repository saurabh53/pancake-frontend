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
    displayName: 'MANY',
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
    tokenPerBlock: '0.28',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    stakingFees: 0,
  },
  {
    sousId: 20,
    image: 'BNB',
    displayName: 'BNB',
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
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    stakingFees: 4,
  },
  {
    sousId: 21,
    image: 'busd',
    displayName: 'BUSD',
    tokenName: 'MANY',
    stakingTokenName: QuoteToken.BUSD,
    stakingTokenAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    contractAddress: {
      97: '0x6348D32E96Fbca52E4D24aef7A73Fa6Aa32eCC73',
      56: '0x6348D32E96Fbca52E4D24aef7A73Fa6Aa32eCC73',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://manyswap.io/',
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    stakingFees: 4,
  },
  {
    sousId: 22,
    image: 'CAKE',
    displayName: 'CAKE',
    tokenName: 'MANY',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xde297A0b08903c8BaAC5a9E79ff0a8c2184b0FFA',
      56: '0xde297A0b08903c8BaAC5a9E79ff0a8c2184b0FFA',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://manyswap.io/',
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    stakingFees: 4,
  },
]

export default pools

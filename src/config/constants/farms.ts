import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
 
  {
    
      pid: 0,
      lpSymbol: 'MANY-BNB LP',
      lpAddresses: {
        97: '0x5a37fb91a243835458064f771f4612f15e368f76',
        56: '0x5a37fb91a243835458064f771f4612f15e368f76',
      },
      tokenSymbol: 'MANY',
      tokenAddresses: {
        97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
        56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      },
      quoteTokenSymbol: QuoteToken.BNB,
      quoteTokenAdresses: contracts.wbnb,
    },
    {
    pid: 1,
    lpSymbol: 'MANY-BUSD LP',
    lpAddresses: {
      97: '0x033cAa5A86118F0114Fb1789f48da0024259F486',
      56: '0x033cAa5A86118F0114Fb1789f48da0024259F486',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xd9AD3EBE9aad28201DcCCf21C11237dBda8631C3',
      56: '0xd9AD3EBE9aad28201DcCCf21C11237dBda8631C3',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'ETH-BUSD LP',
    lpAddresses: {
      97: '0x07cAaB012D6Ee77013B17d2E1F51F1894f93BeC4',
      56: '0x07cAaB012D6Ee77013B17d2E1F51F1894f93BeC4',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0xe33d111f809517e740539f78de11ec69909c3bde',
      56: '0xe33d111f809517e740539f78de11ec69909c3bde',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'MANY-BDO LP',
    lpAddresses: {
      97: '0x4Cd45f075e65E7Df128e4c0B1B43Df85F0C5dC41',
      56: '0x4Cd45f075e65E7Df128e4c0B1B43Df85F0C5dC41',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.MANY,
    quoteTokenAdresses: contracts.many,
  },
  {
    pid: 6,
    lpSymbol: 'MANY-BRY LP',
    lpAddresses: {
      97: '0x9e9902fc5797365ec4c7a0ad5ceb4dbc9d5931f8',
      56: '0x9e9902fc5797365ec4c7a0ad5ceb4dbc9d5931f8',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.MANY,
    quoteTokenAdresses: contracts.many,
  },
  {
    pid: 7,
    lpSymbol: 'MANY-CAKE LP',
    lpAddresses: {
      97: '0x5a4CFDee2848B12fCb6872A17b30dFF5a9262B6D',
      56: '0x5a4CFDee2848B12fCb6872A17b30dFF5a9262B6D',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.MANY,
    quoteTokenAdresses: contracts.many,
  },
  {
    pid: 8,
    lpSymbol: 'MANY-SUSHI LP',
    lpAddresses: {
      97: '0xd45e492A508548b6146fC028BC20e8E4995974C4',
      56: '0xd45e492A508548b6146fC028BC20e8E4995974C4',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.MANY,
    quoteTokenAdresses: contracts.many,
  },
  {
    pid: 9,
    lpSymbol: 'MANY-BAKE LP',
    lpAddresses: {
      97: '0x2A7e87c8619B9181DE4135F0A9f28bCdB9451327',
      56: '0x2A7e87c8619B9181DE4135F0A9f28bCdB9451327',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.MANY,
    quoteTokenAdresses: contracts.many,
  },
  {
    pid: 10,
    lpSymbol: 'BNB-CAKE LP',
    lpAddresses: {
      97: '0x19fc76B7162baF99E223683dd7AF37220E7EF3Dd',
      56: '0x19fc76B7162baF99E223683dd7AF37220E7EF3Dd'
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 12,
    lpSymbol: 'MANY-JulD LP',
    lpAddresses: {
      97: '0xeFfFB5e4FF883Cf1db4Abf34C5CCDfeC8C317D4d',
      56: '0xeFfFB5e4FF883Cf1db4Abf34C5CCDfeC8C317D4d',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.MANY,
    quoteTokenAdresses: contracts.many,
  },
  {
    pid: 13,
    lpSymbol: 'MANY-EGG LP',
    lpAddresses: {
      97: '0xc4E28e916049df8100Bc8fbF9dbb49474B9f53c4',
      56: '0xc4E28e916049df8100Bc8fbF9dbb49474B9f53c4',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.MANY,
    quoteTokenAdresses: contracts.many,
  },
  {
    pid: 14,
    lpSymbol: 'MANY-WATCH LP',
    lpAddresses: {
      97: '0x17C22c02ce784a657E17643abb3e9E94a8b8d6fb',
      56: '0x17C22c02ce784a657E17643abb3e9E94a8b8d6fb',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.MANY,
    quoteTokenAdresses: contracts.many,
  },
  {
    pid: 15,
    lpSymbol: 'MANY-BSCX LP',
    lpAddresses: {
      97: '0x3af1c34CFD00f757DA51199E085aC771EaA308e4',
      56: '0x3af1c34CFD00f757DA51199E085aC771EaA308e4',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.MANY,
    quoteTokenAdresses: contracts.many,
  },
  {
    pid: 16,
    lpSymbol: 'MANY-AUTO LP',
    lpAddresses: {
      97: '0xC8E08C72975E3C1CC49c7150603e15EF34DA20C7',
      56: '0xC8E08C72975E3C1CC49c7150603e15EF34DA20C7',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.MANY,
    quoteTokenAdresses: contracts.many,
  },
  {
    pid: 18,
    lpSymbol: 'MANY-DODO LP',
    lpAddresses: {
      97: '0x5f5B8ba1F2C1871F3117CE8365A1c7cb2797804a',
      56: '0x5f5B8ba1F2C1871F3117CE8365A1c7cb2797804a',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.MANY,
    quoteTokenAdresses: contracts.many,
  },
  {
    pid: 19,
    lpSymbol: 'MANY-HELMET LP',
    lpAddresses: {
      97: '0x80Fd561BF952bCA637615eF54CCB0290b3f6AD71',
      56: '0x80Fd561BF952bCA637615eF54CCB0290b3f6AD71',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.MANY,
    quoteTokenAdresses: contracts.many,
  },
  {
    pid: 17,
    lpSymbol: 'MANY-SFP LP',
    lpAddresses: {
      97: '0xA817890c9e2454396cf4330a9a91934a462A022e',
      56: '0xA817890c9e2454396cf4330a9a91934a462A022e',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.MANY,
    quoteTokenAdresses: contracts.many,
  },
  {
    pid: 20,
    lpSymbol: 'MANY-BIFI LP',
    lpAddresses: {
      97: '0x5bd9f780c7960A80eD5D77F21067CE73F9D8eE5A',
      56: '0x5bd9f780c7960A80eD5D77F21067CE73F9D8eE5A',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.MANY,
    quoteTokenAdresses: contracts.many,
  },
  {
    pid: 21,
    lpSymbol: 'MANY-ALICE LP',
    lpAddresses: {
      97: '0x1b27825Fca96AAB3626AE897a8009dDCA3411766',
      56: '0x1b27825Fca96AAB3626AE897a8009dDCA3411766',
    },
    tokenSymbol: 'MANY',
    tokenAddresses: {
      97: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
      56: '0x2dD6c9c5BCD16816226542688788932c6e79A600',
    },
    quoteTokenSymbol: QuoteToken.MANY,
    quoteTokenAdresses: contracts.many,
  },
  
  // {
  //   pid: 77,
  //   lpSymbol: 'DODO-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9e642d174b14faea31d842dc83037c42b53236e6',
  //   },
  //   tokenSymbol: 'DODO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 76,
  //   lpSymbol: 'SWINGBY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4576C456AF93a37a096235e5d83f812AC9aeD027',
  //   },
  //   tokenSymbol: 'SWINGBY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 75,
  //   lpSymbol: 'BRY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5E3CD27F36932Bc0314aC4e2510585798C34a2fC',
  //   },
  //   tokenSymbol: 'BRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 74,
  //   lpSymbol: 'ZEE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb5ab3996808c7e489dcdc0f1af2ab212ae0059af',
  //   },
  //   tokenSymbol: 'ZEE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x44754455564474a89358b2c2265883df993b12f0',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 73,
  //   lpSymbol: 'SWGb-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc1800c29cf91954357cd0bf3f0accaada3d0109c',
  //   },
  //   tokenSymbol: 'SWGb',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 72,
  //   lpSymbol: 'COMP-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0392957571f28037607c14832d16f8b653edd472',
  //   },
  //   tokenSymbol: 'COMP',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
  //   },
  //   quoteTokenSymbol: QuoteToken.ETH,
  //   quoteTokenAdresses: contracts.eth,
  //   isCommunity: false,
  // },
  // {
  //   pid: 71,
  //   lpSymbol: 'SFP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xcbe2cf3bd012e9c1ade2ee4d41db3dac763e78f3',
  //   },
  //   tokenSymbol: 'SFP',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 70,
  //   lpSymbol: 'BETH-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x99d865ed50d2c32c1493896810fa386c1ce81d91',
  //   },
  //   tokenSymbol: 'BETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b',
  //   },
  //   quoteTokenSymbol: QuoteToken.ETH,
  //   quoteTokenAdresses: contracts.eth,
  //   isCommunity: false,
  // },
  // {
  //   pid: 69,
  //   lpSymbol: 'LINA-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xeb325a8ea1c5abf40c7ceaf645596c1f943d0948',
  //   },
  //   tokenSymbol: 'LINA',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 68,
  //   lpSymbol: 'LIT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x60bB03D1010b99CEAdD0dd209b64bC8bd83da161',
  //   },
  //   tokenSymbol: 'LIT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xb59490ab09a0f526cc7305822ac65f2ab12f9723',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 67,
  //   lpSymbol: 'HGET-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x66b9e1eac8a81f3752f7f3a5e95de460688a17ee',
  //   },
  //   tokenSymbol: 'HGET',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xc7d8d35eba58a0935ff2d5a33df105dd9f071731',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 66,
  //   lpSymbol: 'BDO-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x74690f829fec83ea424ee1f1654041b2491a7be9',
  //   },
  //   tokenSymbol: 'BDO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x190b589cf9fb8ddeabbfeae36a813ffb2a702454',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 65,
  //   lpSymbol: 'EGLD-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ef4952c7a9afbe374ea02d1bf5ed5a0015b7716',
  //   },
  //   tokenSymbol: 'EGLD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 63,
  //   lpSymbol: 'UST-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xD1F12370b2ba1C79838337648F820a87eDF5e1e6',
  //   },
  //   tokenSymbol: 'UST',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 62,
  //   lpSymbol: 'mAMZN-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc92Dc34665c8a21f98E1E38474580b61b4f3e1b9',
  //   },
  //   tokenSymbol: 'mAMZN',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x3947B992DC0147D2D89dF0392213781b04B25075',
  //   },
  //   quoteTokenSymbol: QuoteToken.UST,
  //   quoteTokenAdresses: contracts.ust,
  //   isCommunity: false,
  // },
  // {
  //   pid: 61,
  //   lpSymbol: 'mGOOGL-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x852A68181f789AE6d1Da3dF101740a59A071004f',
  //   },
  //   tokenSymbol: 'mGOOGL',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f',
  //   },
  //   quoteTokenSymbol: QuoteToken.UST,
  //   quoteTokenAdresses: contracts.ust,
  //   isCommunity: false,
  // },
  // {
  //   pid: 60,
  //   lpSymbol: 'mNFLX-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xF609ade3846981825776068a8eD7746470029D1f',
  //   },
  //   tokenSymbol: 'mNFLX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc',
  //   },
  //   quoteTokenSymbol: QuoteToken.UST,
  //   quoteTokenAdresses: contracts.ust,
  //   isCommunity: false,
  // },
  // {
  //   pid: 59,
  //   lpSymbol: 'mTSLA-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xD5664D2d15cdffD597515f1c0D945c6c1D3Bf85B',
  //   },
  //   tokenSymbol: 'mTSLA',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xF215A127A196e3988C09d052e16BcFD365Cd7AA3',
  //   },
  //   quoteTokenSymbol: QuoteToken.UST,
  //   quoteTokenAdresses: contracts.ust,
  //   isCommunity: false,
  // },
  // {
  //   pid: 58,
  //   lpSymbol: 'wSOTE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xffb9e2d5ce4378f1a89b29bf53f80804cc078102',
  //   },
  //   tokenSymbol: 'wSOTE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x541e619858737031a1244a5d0cd47e5ef480342c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 57,
  //   lpSymbol: 'FRONT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x36b7d2e5c7877392fb17f9219efad56f3d794700',
  //   },
  //   tokenSymbol: 'FRONT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 56,
  //   lpSymbol: 'Helmet-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6411310c07d8c48730172146fd6f31fa84034a8b',
  //   },
  //   tokenSymbol: 'Helmet',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 55,
  //   lpSymbol: 'BTCST-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x91589786D36fEe5B27A5539CfE638a5fc9834665',
  //   },
  //   tokenSymbol: 'BTCST',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 54,
  //   lpSymbol: 'LTC-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbc765fd113c5bdb2ebc25f711191b56bb8690aec',
  //   },
  //   tokenSymbol: 'LTC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 53,
  //   lpSymbol: 'USDC-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 52,
  //   lpSymbol: 'DAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC',
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 51,
  //   lpSymbol: 'BSCX-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x20781bc3701c5309ac75291f5d09bdc23d7b7fa8',
  //   },
  //   tokenSymbol: 'BSCX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 50,
  //   lpSymbol: 'TEN-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x01ecc44ddd2d104f44d2aa1a2bd9dfbc91ae8275',
  //   },
  //   tokenSymbol: 'TEN',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xdff8cb622790b7f92686c722b02cab55592f152c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 49,
  //   lpSymbol: 'bALBT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbe14f3a89a4f7f279af9d99554cf12e8c29db921',
  //   },
  //   tokenSymbol: 'bALBT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x72faa679e1008ad8382959ff48e392042a8b06f7',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 46,
  //   lpSymbol: 'OG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x64373608f2e93ea97ad4d8ca2cce6b2575db2f55',
  //   },
  //   tokenSymbol: 'OG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf05e45ad22150677a017fbd94b84fbb63dc9b44c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 47,
  //   lpSymbol: 'ASR-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd6b900d5308356317299dafe303e661271aa12f1',
  //   },
  //   tokenSymbol: 'ASR',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x80d5f92c2c8c682070c95495313ddb680b267320',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 48,
  //   lpSymbol: 'ATM-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd5b3ebf1a85d32c73a82b40f75e1cd929caf4029',
  //   },
  //   tokenSymbol: 'ATM',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x25e9d05365c867e59c1904e7463af9f312296f9e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 45,
  //   lpSymbol: 'REEF-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58B58cab6C5cF158f63A2390b817710826d116D0',
  //   },
  //   tokenSymbol: 'REEF',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 44,
  //   lpSymbol: 'Ditto-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x470bc451810b312bbb1256f96b0895d95ea659b1',
  //   },
  //   tokenSymbol: 'DITTO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x233d91A0713155003fc4DcE0AFa871b508B3B715',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 43,
  //   lpSymbol: 'JUV-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x51a2ffa5b7de506f9a22549e48b33f6cf0d9030e',
  //   },
  //   tokenSymbol: 'JUV',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xc40c9a843e1c6d01b7578284a9028854f6683b1b',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 42,
  //   lpSymbol: 'PSG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9c4f6a5050cf863e67a402e8b377973b4e3372c1',
  //   },
  //   tokenSymbol: 'PSG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbc5609612b7c44bef426de600b5fd1379db2ecf1',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 39,
  //   lpSymbol: 'UNFI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbEA35584b9a88107102ABEf0BDeE2c4FaE5D8c31',
  //   },
  //   tokenSymbol: 'UNFI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 41,
  //   lpSymbol: 'VAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xff17ff314925dff772b71abdff2782bc913b3575',
  //   },
  //   tokenSymbol: 'VAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 40,
  //   lpSymbol: 'BLK-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xC743Dc05F03D25E1aF8eC5F8228f4BD25513c8d0',
  //   },
  //   tokenSymbol: 'BLK',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 37,
  //   lpSymbol: 'HARD-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x9f40e8a2fcaa267a0c374b6c661e0b372264cc3d',
  //   },
  //   tokenSymbol: 'HARD',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xf79037f6f6be66832de4e7516be52826bc3cbcc4',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
    
  // {
  //   pid: 3,
  //   lpSymbol: 'ADA-BNB LP',
  //   lpAddresses: {
  //     97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
  //     56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf',
  //   },
  //   tokenSymbol: 'ADA',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'BAND-BNB LP',
  //   lpAddresses: {
  //     97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
  //     56: '0xc639187ef82271d8f517de6feae4faf5b517533c',
  //   },
  //   tokenSymbol: 'BAND',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'DOT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'EOS-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x981d2ba1b298888408d342c39c2ab92e8991691e',
  //   },
  //   tokenSymbol: 'EOS',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 7,
  //   lpSymbol: 'LINK-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xaebe45e3a03b734c68e5557ae04bfc76917b4686',
  //   },
  //   tokenSymbol: 'LINK',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 11,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 12,
  //   lpSymbol: 'TWT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x610e7a287c27dfFcaC0F0a94f547Cc1B770cF483',
  //   },
  //   tokenSymbol: 'TWT',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x4b0f1812e5df2a09796481ff14017e6005508003',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 13,
  //   lpSymbol: 'XVS-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x41182c32F854dd97bA0e0B1816022e0aCB2fc0bb',
  //   },
  //   tokenSymbol: 'XVS',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
 
  // {
  //   pid: 15,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
  //   },
  //   tokenSymbol: 'BTC',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 16,
  //   lpSymbol: 'ALPHA-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x4e0f3385d932F7179DeE045369286FFa6B03d887',
  //   },
  //   tokenSymbol: 'ALPHA',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 17,
  //   lpSymbol: 'USDT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x20bcc3b8a0091ddac2d0bc30f68e6cbb97de59cd',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 18,
  //   lpSymbol: 'XRP-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2',
  //   },
  //   tokenSymbol: 'XRP',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 19,
  //   lpSymbol: 'ATOM-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x2333c77fc0b2875c11409cdcd3c75d42d402e834',
  //   },
  //   tokenSymbol: 'ATOM',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 20,
  //   lpSymbol: 'YFII-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x574a978c2d0d36d707a05e459466c7a1054f1210',
  //   },
  //   tokenSymbol: 'YFII',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x7f70642d88cf1c4a3a7abb072b53b929b653eda5',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 21,
  //   lpSymbol: 'DAI-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x56c77d59e82f33c712f919d09fceddf49660a829',
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 22,
  //   lpSymbol: 'XTZ-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x5acac332f0f49c8badc7afd0134ad19d3db972e6',
  //   },
  //   tokenSymbol: 'XTZ',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 23,
  //   lpSymbol: 'BCH-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x54edd846db17f43b6e43296134ecd96284671e81',
  //   },
  //   tokenSymbol: 'BCH',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 24,
  //   lpSymbol: 'YFI-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x68Ff2ca47D27db5Ac0b5c46587645835dD51D3C1',
  //   },
  //   tokenSymbol: 'YFI',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 25,
  //   lpSymbol: 'UNI-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x4269e7F43A63CEA1aD7707Be565a94a9189967E9',
  //   },
  //   tokenSymbol: 'UNI',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 26,
  //   lpSymbol: 'FIL-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x35fe9787f0ebf2a200bac413d3030cf62d312774',
  //   },
  //   tokenSymbol: 'FIL',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 27,
  //   lpSymbol: 'INJ-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7a34bd64d18e44CfdE3ef4B81b87BAf3EB3315B6',
  //   },
  //   tokenSymbol: 'INJ',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa2b726b1145a4773f68593cf171187d8ebe4d495',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 29,
  //   lpSymbol: 'USDC-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x30479874f9320a62bce3bc0e315c920e1d73e278',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 30,
  //   lpSymbol: 'SXP-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x752E713fB70E3FA1Ac08bCF34485F14A986956c4',
  //   },
  //   tokenSymbol: 'SXP',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 32,
  //   lpSymbol: 'CTK-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7793870484647a7278907498ec504879d6971EAb',
  //   },
  //   tokenSymbol: 'CTK',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 34,
  //   lpSymbol: 'STAX-CAKE LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7cd05f8b960ba071fdf69c750c0e5a57c8366500',
  //   },
  //   tokenSymbol: 'STAX',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 35,
  //   lpSymbol: 'NAR-CAKE LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x745c4fd226e169d6da959283275a8e0ecdd7f312',
  //   },
  //   tokenSymbol: 'NAR',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa1303e6199b319a891b79685f0537d289af1fc83',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 36,
  //   lpSymbol: 'NYA-CAKE LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x2730bf486d658838464a4ef077880998d944252d',
  //   },
  //   tokenSymbol: 'NYA',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xbfa0841f7a90c4ce6643f651756ee340991f99d5',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 38,
  //   lpSymbol: 'bROOBEE-CAKE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x970858016C963b780E06f7DCfdEf8e809919BcE8',
  //   },
  //   tokenSymbol: 'bROOBEE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'BAKE-BNB Bakery LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc2eed0f5a0dc28cfa895084bc0a9b8b8279ae492',
  //   },
  //   tokenSymbol: 'BAKE',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 9,
  //   lpSymbol: 'BURGER-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xd937FB9E6e47F3805981453BFB277a49FFfE04D7',
  //   },
  //   tokenSymbol: 'BURGER',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 10,
  //   lpSymbol: 'BAKE-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x3Da30727ed0626b78C212e81B37B97A8eF8A25bB',
  //   },
  //   tokenSymbol: 'BAKE',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
]

export default farms

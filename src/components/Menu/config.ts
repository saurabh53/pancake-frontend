import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: `https://exchange.manyswap.io/?r=${window.localStorage.getItem('refer')}`,
      },
      {
        label: 'Pancake',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x2dd6c9c5bcd16816226542688788932c6e79a600',
      },
      {
        label: 'Julswap',
        href: 'https://julswap.com/#/swap?inputCurrency=0x2dd6c9c5bcd16816226542688788932c6e79a600',
      },
    ],
    
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'StaFi',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Affiliate',
    icon: 'InfoIcon',
    href: '/affiliate',
   
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Listing',
    icon: 'TradeIcon',
    items: [
      {
        label: 'CoinMarketCap',
        href: `https://coinmarketcap.com/currencies/manyswap/`,
      },
      {
        label: 'Coingecko',
        href: `https://www.coingecko.com/en/coins/many`,
      },
      {
        label: 'BSCSCAN',
        href: `https://bscscan.com/token/0x2dD6c9c5BCD16816226542688788932c6e79A600`,
      },
      {
        label: 'Astrotools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x9001c04faed5c0852bcc8378fab9b76ded8b27eb',
      }
    ],
    
  },
  {
    label: 'Graph',
    icon: 'IfoIcon',
    href: 'https://graph.manyswap.io',
  },
  {
    label: 'Pitch Deck',
    icon: 'MoreIcon',
    href: 'https://manyswap.io/Pitch_Deck.pdf',
  },
  
  {
    label: 'Info',
    icon: 'InfoIcon',
    href: 'https://info.manyswap.io/',
   
  },
   
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
     
      {
        label: 'Github',
        href: 'https://github.com/manyswap',
      },
      
    ],
  },
  
]

export default config

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
    label: 'Public Sale',
    icon: 'IfoIcon',
    href: '/ifo',
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

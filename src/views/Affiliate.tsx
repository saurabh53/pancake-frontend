import React from 'react'
import styled from 'styled-components'
import { Text, Heading, BaseLayout, Button, LinkExternal, Flex, Image, LogoIcon } from '@pancakeswap-libs/uikit'

import { useWallet } from '@binance-chain/bsc-use-wallet'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'
import getSponsor from 'utils/getSponsor'

const LaunchIfoCallout = styled(BaseLayout)`
  border-top: 2px solid ${({ theme }) => theme.colors.textSubtle};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: 0 auto;
  padding: 32px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

const List = styled.ul`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;

  & > li {
    line-height: 1.4;
    margin-bottom: 8px;
  }
`

/**
 * Note: currently there should be only 1 active IFO at a time
 */







const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
  text-align: center;
  
`


const Affiliate = () => {
  const TranslateString = useI18n()
  const account = useWallet()
  
  
  
  
  return (
    <Page>
    <Image src="/images/space_Banner Mobile.svg" alt="ManySwap illustration" width={949} height={384} responsive />
      <LaunchIfoCallout>
        <div>
         
        <Heading mb="16px">{TranslateString(600, 'Recommend Manyswap, Get Rewarded! Many Swap Offering a Revenue Sharing to the loyal users through Affliate program')}:</Heading>
          <List>
           
            <li>{TranslateString(602, 'For each trade 0.3% Fee is paid')}</li>
            <li>{TranslateString(602, '0.1% goes to the Sponsor')}</li>
            <li>{TranslateString(602, '0.1% goes to the Liquidity Providers')}</li>
            <li>{TranslateString(602, '0.1% goes to Manyswap Treasury')}</li>
          </List>

          
        </div>
        <div>
        <LogoIcon width="64px" mb="8px" /> 
        <Heading size="xxl">Refer</Heading>
        <Text >{TranslateString(800, `https://manyswap.io/?r=${account.account}`)}</Text>
       
       
          
          
        </div>
      </LaunchIfoCallout>
     
      
      
          
      
    </Page>
  )
}

export default Affiliate

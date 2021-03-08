import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

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
      <StyledNotFound>
        <LogoIcon width="64px" mb="8px" />
        <Heading size="xxl">Refer</Heading>
        <Text >{TranslateString(800, `https://manyswap.io/?r=${account.account}`)}</Text>
        <Button as="a" href="/" size="sm">
          {TranslateString(1124, 'Back Home')}
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default Affiliate

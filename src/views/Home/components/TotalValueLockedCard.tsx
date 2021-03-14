import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from 'hooks/useTotalValue'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue =  useTotalValue() 
  
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null
  console.log("totalvalue",totalValue)
  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(762, 'Total Value Locked (TVL)')}
        </Heading>
        {totalValue ? (
          <>
            {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
            <CardValue value={totalValue.toNumber()} prefix="$" decimals={2} />
            <Text color="textSubtle">{TranslateString(764, 'Across all Farms & StaFi pools')}</Text>
          </>
        ) : (
          <>
            <CardValue value={0} prefix="$" decimals={2} />
            <Text color="textSubtle">{TranslateString(764, 'Across all Farms & StaFi pools')}</Text>
          </>
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard

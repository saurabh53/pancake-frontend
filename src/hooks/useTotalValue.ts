import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import cakeABI from 'config/abi/cake.json'
import { getContract } from 'utils/web3'
import { getCakeAddress } from 'utils/addressHelpers'
import { getTotalValue, useFarms, usePools, usePriceBnbBusd, usePriceCakeBusd, usePriceEthBusd ,usePriceCake} from '../state/hooks'

import useRefresh from './useRefresh'



export const useTotalValue = () => {
  const { slowRefresh } = useRefresh()
  const [totalValue, settotalValue] = useState<BigNumber>()
  const { account } = useWallet()
  const farms = useFarms()
  const bnbPrice = usePriceBnbBusd()
  const cakePrice = usePriceCakeBusd()
  const ethPrice = usePriceEthBusd()
  const pancakePrice = usePriceCake()
  const pools = usePools(account)
  
  useEffect(() => {
    function fetchTotalValue() {
        
      const value = getTotalValue(farms,bnbPrice,cakePrice,ethPrice,pools , pancakePrice)
      settotalValue(new BigNumber(value))
    }
    

    fetchTotalValue()
    console.log("ehehfhhvbdhvbdhf",farms,bnbPrice,cakePrice,ethPrice,pools)
  }, [farms,bnbPrice,cakePrice,ethPrice,pools,pancakePrice])

  return totalValue
}



export default useTotalValue


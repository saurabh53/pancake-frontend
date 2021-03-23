import { AbiItem } from 'web3-utils'
import { Interface } from '@ethersproject/abi'
import { getWeb3 } from 'utils/web3'
import RouterAbi from 'config/abi/router.json'
import {getRouterAddress}  from 'utils/addressHelpers'
import { useState } from 'react'



const getSponsor = (account) => {
  const web3 = getWeb3()
  let res = "0X00000000000000000"
  if(account)
  {
    const multi = new web3.eth.Contract((RouterAbi as unknown) as AbiItem, getRouterAddress())
   
  
   res   = multi.methods.affiliates(account).call()
  }

  

  return res
}

export default getSponsor
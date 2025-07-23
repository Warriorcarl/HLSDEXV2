import { ChainId } from 'ajoswapsdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.HELIOS]: '0x5546454569f2d5028E7640e1c9ce51041A75e38d'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

import {useContext} from 'react'
import PlatillosContext from '../context/PlatillosProvider'

const usePlatillos = () => {
     return useContext(PlatillosContext)
}

export default usePlatillos
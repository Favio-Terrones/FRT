import {useContext} from 'react'
import ReservasContext from '../context/ReservasProvider'


const useReservas = () => {
    return useContext(ReservasContext)
}

export default useReservas
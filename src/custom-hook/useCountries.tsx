//import { useEffect } from 'react'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAllCountries } from '../redux/action/countriesA'

const useCountries = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])
}
export default useCountries

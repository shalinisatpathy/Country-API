import { Country } from '../../types'
import {
  Action,
  FETCH_COUNTRIES_START,
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_SUCCESS,
} from '../action/countriesA'

export type InitialCountriesState = {
  countriesData: Country[]
  error: null | Error
  loading: boolean
}

const initialCountriesState: InitialCountriesState = {
  countriesData: [],
  error: null,
  loading: false,
}

const allCountriesReducer = (
  state = initialCountriesState,
  action: Action
): InitialCountriesState => {
  switch (action.type) {
    case FETCH_COUNTRIES_START:
      return {
        ...state,
        loading: true,
      }
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countriesData: action.payload,
        loading: false,
      }
    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    default:
      return state
  }
}

export default allCountriesReducer

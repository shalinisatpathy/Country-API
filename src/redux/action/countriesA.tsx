import { Dispatch } from 'redux'

import { Country } from '../../types'

export const FETCH_COUNTRIES_START = 'FETCH_COUNTRIES_START'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR'

export function fetchCountriesStart(): CountriesStartAction {
  return {
    type: FETCH_COUNTRIES_START,
  }
}

export function fetchCountriesSuccess(
  payload: Country[]
): FetchCountriesSuccessAction {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: payload,
  }
}

export const fetchCountriesError = (err: Error): FetchCountriesErrorAction => {
  return {
    type: FETCH_COUNTRIES_ERROR,
    payload: err,
  }
}

export const fetchAllCountries = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchCountriesStart())
      const result = await fetch('https://restcountries.com/v3.1/all')
      const countries: Country[] = await result.json()
      dispatch(fetchCountriesSuccess(countries))
      console.log('countrydetail', countries)
    } catch (err) {
      dispatch(fetchCountriesError(err as Error))
    }
  }
}
export type CountriesStartAction = {
  type: typeof FETCH_COUNTRIES_START
}
export type FetchCountriesSuccessAction = {
  type: typeof FETCH_COUNTRIES_SUCCESS
  payload: Country[]
}

export type FetchCountriesErrorAction = {
  type: typeof FETCH_COUNTRIES_ERROR
  payload: Error
}

export type Action =
  | CountriesStartAction
  | FetchCountriesSuccessAction
  | FetchCountriesErrorAction

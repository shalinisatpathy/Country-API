import { combineReducers } from 'redux'
import allCountriesReducer from './countriesR'
import favouriteAllReducer from './favoriteR'

const rootReducer = combineReducers({
  countries: allCountriesReducer,
  favCountries: favouriteAllReducer,
})

export default rootReducer

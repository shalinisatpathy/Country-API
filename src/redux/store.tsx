import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Country } from '../types'
import rootReducer from './reducers/rootReducer'

export type InitialAllState = {
  favCountries: {
    favoriteCountries: string[]
  }
  countries: {
    countriesData: Country[]
    error: null
    loading: boolean
  }
}

const initialState: InitialAllState = {
  favCountries: { favoriteCountries: [] },
  countries: {
    countriesData: [],
    error: null,
    loading: false,
  },
}

const createReduxStore = () => {
  const favoriteList = localStorage.getItem('countries')
  //if there is favoritelist value in the localStorage, modify the initialState with this value
  if (favoriteList) {
    initialState.favCountries.favoriteCountries = JSON.parse(favoriteList)
  }
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
  store.subscribe(() => {
    const currentState = store.getState()
    console.log('state', currentState)
    const favoriteList = currentState.favCountries.favoriteCountries
    localStorage.setItem('countries', JSON.stringify(favoriteList))
  })
  return store
}
export default createReduxStore

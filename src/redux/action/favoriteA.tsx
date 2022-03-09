export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

export const addFavorite = (countryName: string): addFavoriteAction => {
  return {
    type: ADD_FAVORITE,
    payload: countryName,
  }
}
export const removeFavorite = (countryName: string): RemoveFavoriteAction => {
  return {
    type: REMOVE_FAVORITE,
    payload: countryName,
  }
}
type addFavoriteAction = {
  type: typeof ADD_FAVORITE
  payload: string
}

type RemoveFavoriteAction = {
  type: typeof REMOVE_FAVORITE
  payload: string
}

export type Actions = addFavoriteAction | RemoveFavoriteAction

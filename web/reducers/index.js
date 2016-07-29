import update from 'immutability-helper'

const initialState = {
  beerList: ['Hoegarden','Artois','Cidar','Lager'],
  pieList:  ['Apple Cinnamon','Banana Walnut','Bannofee'],
  searchTerm: {}
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'LOAD_CURRENCY_LIST':
      return update(state, { currencyList: { $set: action.currencyList } })
    case 'SET_SEARCH_TERM':
      return update(state, { searchTerm: { $set: { [action.listRef] : action.searchTerm} }})
    default:
      return state
  }
}

export default reducer

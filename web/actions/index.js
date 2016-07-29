import config from '../../config'

const API_ENDPOINT = `${config.API_URL}/api`

function loadCurrencyList(currencyList) {
  return {
    type: 'LOAD_CURRENCY_LIST',
    currencyList: currencyList
  }
}

export function fetchCurrencyList() {
  return (dispatch) => {
    return fetch(`${API_ENDPOINT}/currency`)
      .then(response => response.json())
      .then(json => dispatch(loadCurrencyList(json.currency)))
  }
}

export function setSearchTerm(listRef,e) {
  return {
    type: 'SET_SEARCH_TERM',
    searchTerm: e.target.value,
    listRef: listRef
  }
}

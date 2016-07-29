import {connect} from 'react-redux'
import BeerList from '../components/BeerList'
import * as a from '../actions'

const getFilteredList = (state) => {
  if (state.searchTerm['beer'] === undefined) {
    return state.beerList
  }
  else {
    let re = new RegExp(state.searchTerm['beer'],'gi')
    return state.beerList.filter((beer) => beer.match(re))
  }
}

const getSearchTerm = (state) => {
  return (state.searchTerm['beer'] === undefined) ? '' : state.searchTerm['beer']
}

const mapStateToProps = (state) => {
  return {
    searchTerm: getSearchTerm(state),
    filteredList: getFilteredList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (e) => {
      dispatch(a.setSearchTerm('beer',e))
    }
  }
}

const BeerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList)

export default BeerListContainer

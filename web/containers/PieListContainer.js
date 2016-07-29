import {connect} from 'react-redux'
import PieList from '../components/PieList'
import * as a from '../actions'

const getFilteredList = (state) => {
  if (state.searchTerm['pie'] === undefined) {
    return state.pieList
  }
  else {
    let re = new RegExp(state.searchTerm['pie'],'gi')
    return state.pieList.filter((pie) => pie.match(re))
  }
}

const getSearchTerm = (state) => {
  return (state.searchTerm['pie'] === undefined) ? '' : state.searchTerm['pie']
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
      dispatch(a.setSearchTerm('pie',e))
    }
  }
}

const PieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PieList)

export default PieListContainer

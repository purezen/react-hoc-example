import {connect} from 'react-redux'
import PieList from '../components/PieList'
import * as a from '../actions'

const mapStateToProps = (state) => {
  return {
    pieList: state.pieList
  }
}

const PieListContainer = connect(
  mapStateToProps
)(PieList)

export default PieListContainer

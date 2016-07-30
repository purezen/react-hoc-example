import {connect} from 'react-redux'
import PieList from '../components/PieList'
import * as a from '../actions'

import Filter from '../enhancers/filter'

const PieListContainer = connect(
  (state) => state
)(Filter(PieList, {list: 'pieList'}))

export default PieListContainer

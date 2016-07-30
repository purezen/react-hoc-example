import {connect} from 'react-redux'
import BeerList from '../components/BeerList'
import * as a from '../actions'

import Filter from '../enhancers/filter'

const BeerListContainer = connect(
  (state) => state
)(Filter(BeerList, {list: 'beerList'}))

export default BeerListContainer

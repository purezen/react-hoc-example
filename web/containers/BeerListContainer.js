import {connect} from 'react-redux'
import BeerList from '../components/BeerList'
import * as a from '../actions'

const mapStateToProps = (state) => {
  return {
    beerList: state.beerList
  }
}

const BeerListContainer = connect(
  mapStateToProps
)(BeerList)

export default BeerListContainer

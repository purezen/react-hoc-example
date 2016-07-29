import React, {Component} from 'react'
import FilterComponent from '../utils/FilterComponent'

class BeerList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredList: []
    }
  }

  getList() {
    return this.props.beerList
  }

  setFilteredList(filteredList) {
    this.setState({ filteredList: filteredList })
  }

  render() {
    const filteredList = this.state.filteredList.map ((beer,i) => <div key={i}>{beer}</div>)

    return (
      <div>
        <FilterComponent
          getList={this.getList()}
          setFilteredList={this.setFilteredList.bind(this)}
        />
      {filteredList}
      </div>
    )
  }
}

export default BeerList

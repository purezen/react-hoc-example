import React, {Component} from 'react'
import FilterComponent from '../utils/FilterComponent'

class PieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredList: []
    }
  }

  getList() {
    return this.props.pieList
  }

  setFilteredList(filteredList) {
    this.setState({ filteredList: filteredList })
  }

  render() {
    const filteredList = this.state.filteredList.map ((pie,i) => <div key={i}>{pie}</div>)

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

export default PieList

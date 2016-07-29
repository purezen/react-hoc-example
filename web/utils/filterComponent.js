import React, {Component} from 'react'

class FilterComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  componentDidMount() {
    // instantiating filtered list on mounting the filter component
    const {setFilteredList, getList} = this.props
    setFilteredList(getList)
  }

  getFilteredList(searchTerm,list) {
    let re = new RegExp(searchTerm,'gi')
    return list.filter((item) => item.match(re))
  }

  handleChange(e) {
    let filteredList = this.getFilteredList(e.target.value,this.props.getList)
    this.props.setFilteredList(filteredList)

    this.setState({ searchTerm: e.target.value })
  }

  render() {
    return (
      <input
        value={this.state.searchTerm}
        onChange={this.handleChange.bind(this)}
      />
    )
  }
}

export default FilterComponent

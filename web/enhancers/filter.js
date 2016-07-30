import React, {Component} from 'react'
import {connect} from 'react-redux'

export default function Filter(EnhancedComponent, sourceRef) {
  return class extends Component {
    constructor(props)  {
      super(props)
      this.state = {
        searchTerm: '',
        filteredList: []
      }
    }

    componentDidMount() {
      this.setState({ filteredList: this.props[sourceRef.list] })
    }

    getFilteredList(searchTerm, sourceList) {
      let re = new RegExp(searchTerm,'gi')
      return sourceList.filter((item) => item.match(re))
    }

    handleSearchTerm(e) {
      let filteredList = this.getFilteredList(e.target.value,this.props[sourceRef.list])

      this.setState({
        searchTerm: e.target.value,
        filteredList: filteredList
      })
    }

    render() {
      return (
        <div>
          <input
            value={this.state.searchTerm}
            onChange={this.handleSearchTerm.bind(this)}
          />
          <EnhancedComponent
            {...this.props}
            filteredList={this.state.filteredList}
          />
        </div>
      )
    }
  }
}

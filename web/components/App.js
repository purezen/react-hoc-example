import React, {Component} from 'react'
// import BeerListContainer from '../containers/BeerListContainer'
import PieListContainer from '../containers/PieListContainer'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <PieListContainer/>
      </div>
    )
  }
}

export default App

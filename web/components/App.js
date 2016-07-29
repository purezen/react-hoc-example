import React, {Component} from 'react'
import BeerListContainer from '../containers/BeerListContainer'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <BeerListContainer/>
      </div>
    )
  }
}

export default App

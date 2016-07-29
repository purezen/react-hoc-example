import React from 'react'

const BeerList = (props) => {
  const list = props.beerList.map ((beer,i) => <div key={i}>{beer}</div>)

  return (
    <div>
      <input
        value={props.searchTerm}
        onChange={props.setSearchTerm.bind(this)}
      />
    {list}
    </div>
  )
}

export default BeerList

import React from 'react'

const BeerList = (props) => {
  const list = props.filteredList.map ((beer,i) => <div key={i}>{beer}</div>)

  return (
    <div>
      {list}
    </div>
  )
}

export default BeerList

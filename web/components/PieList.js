import React from 'react'

const PieList = (props) => {
  const list = props.pieList.map ((pie,i) => <div key={i}>{pie}</div>)

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

export default PieList

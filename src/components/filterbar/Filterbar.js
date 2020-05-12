import React from 'react'
import PropTypes from 'prop-types'

import './filterbar.scss'

const Filterbar = ({
  filterHeroes,
  query,
}) => {

  return (
    <input
      type='text'
      className='filterbar-input'
      onChange={e => filterHeroes(e, e.target.value)}
      value={query}
    />
  )
}

Filterbar.propTypes = {
  filterHeroes: PropTypes.func,
  query: PropTypes.string,
}

export default Filterbar
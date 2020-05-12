import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Filterbar from '../filterbar/Filterbar'
import PowerstatsFilters from '../powerstatsFilter/PowerstatsFilter'
import './filters.scss'

const Filters = ({
  filterHeroes,
  stats,
  setFilterStats,
  resetFilterStats,
  query,
}) => {
  const [shownTab, setShownTab] = useState(0)
  return (
    <div className='filter-container'>
      <div className='header-search-type'>
        <div
          role='button'
          className={`header-search-type-button ${shownTab !== 1 && 'selected'}`}
          onClick={() => setShownTab(0)}
        >
          <span 
            className={
              `header-search-type-button-text ${query ? 'active' : ''}`
            }
          >
            Name
          </span>
        </div>
        <div
          role='button'
          className={`header-search-type-button ${shownTab !== 0 && 'selected'}`}
          onClick={() => setShownTab(1)}
        >
          <span 
            className={
              `header-search-type-button-text ${Object.values(stats).length > 0 ? 'active' : ''}`
            }
          >
            Stats
          </span>
        </div>
      </div>
      {shownTab === 0 && (
        <div className='filterbar-container'>
          <span className='filterbar-title'>
            Search for a hero name:
          </span>
          <div className='filter-bar-container'>
            <Filterbar
              filterHeroes={filterHeroes}
              query={query}
            />
          </div>
        </div>
      )}
      {shownTab === 1 && (
        <div className='powerstats-filter-container'>
          <PowerstatsFilters
            stats={stats}
            setFilterStats={setFilterStats}
            resetFilterStats={resetFilterStats}
          />
          {console.log(stats)}
        </div>
      )}
    </div>
  )
}

Filters.propTypes = {
  filterHeroes: PropTypes.func.isRequired,
  stats: PropTypes.shape({
    combat: PropTypes.number,
    durability: PropTypes.number,
    intelligence: PropTypes.number,
    power: PropTypes.number,
    speed: PropTypes.number,
    strength: PropTypes.number,
  }),
  setFilterStats: PropTypes.func.isRequired,
  resetFilterStats: PropTypes.func.isRequired,
  query: PropTypes.string,
}

export default Filters
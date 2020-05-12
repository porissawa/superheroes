import React from 'react'
import PropTypes from 'prop-types'

import Button from '../button/Button'
import './powerstatsFilter.scss'

const PowerstatsFilter = ({
  stats,
  setFilterStats,
  resetFilterStats
}) => {
  return (
    <div className='powerstats-container'>
      <p className='powerstats-paragraph'>Powers greater than:</p>
      <div className='powerstats-columns-container'>
        <div className='left-side'>
          <div className='powerstats-stat-container'>
            <label htmlFor='intelligence'>Intelligence</label>
            <input
              className='powerstat-slider'
              type='range'
              id='intelligence'
              name='intelligence'
              min='0'
              max='100'
              step='1'
              value={stats.intelligence ? stats.intelligence : 0}
              onChange={e => {
                setFilterStats({ statName: 'intelligence', value: +e.target.value })
              }}
            />
            <span className='powerstat-number'>{stats.intelligence}</span>
          </div>
          <div className='powerstats-stat-container'>
            <label htmlFor='strength'>Strength</label>
            <input
              className='powerstat-slider'
              type='range'
              id='strength'
              name='strength'
              min='0'
              max='100'
              step='1'
              value={stats.strength ? stats.strength : 0}
              onChange={e => {
                setFilterStats({ statName: 'strength', value: +e.target.value })
              }}
            />
            <span className='powerstat-number'>{stats.strength}</span>
          </div>
          <div className='powerstats-stat-container'>
            <label htmlFor='speed'>Speed</label>
            <input
              className='powerstat-slider'
              type='range'
              id='speed'
              name='speed'
              min='0'
              max='100'
              step='1'
              value={stats.speed ? stats.speed : 0}
              onChange={e => {
                setFilterStats({ statName: 'speed', value: +e.target.value })
              }}
            />
            <span className='powerstat-number'>{stats.speed}</span>
          </div>
        </div>
        <div className='right-side'>
          <div className='powerstats-stat-container'>
            <label htmlFor='durability'>Durability</label>
            <input
              className='powerstat-slider'
              type='range'
              id='durability'
              name='durability'
              min='0'
              max='100'
              step='1'
              value={stats.durability ? stats.durability : 0}
              onChange={e => {
                setFilterStats({ statName: 'durability', value: +e.target.value })
              }}
            />
            <span className='powerstat-number'>{stats.durability}</span>
          </div>
          <div className='powerstats-stat-container'>
            <label htmlFor='power'>Power</label>
            <input
              className='powerstat-slider'
              type='range'
              id='power'
              name='power'
              min='0'
              max='100'
              step='1'
              value={stats.power ? stats.power : 0}
              onChange={e => {
                setFilterStats({ statName: 'power', value: +e.target.value })
              }}
            />
            <span className='powerstat-number'>{stats.power}</span>
          </div>
          <div className='powerstats-stat-container'>
            <label htmlFor='combat'>Combat</label>
            <input
              className='powerstat-slider'
              type='range'
              id='combat'
              name='combat'
              min='0'
              max='100'
              step='1'
              value={stats.combat ? stats.combat : 0}
              onChange={e => {
                setFilterStats({ statName: 'combat', value: +e.target.value })
              }}
            />
            <span className='powerstat-number'>{stats.combat}</span>
          </div>
        </div>
      </div>
      <Button
        text='Reset stats'
        onClick={() => resetFilterStats({})}
        className='powerstats-reset-button'
      />
    </div>
  )
}

PowerstatsFilter.propTypes = {
  stats: PropTypes.shape({
    combat: PropTypes.number,
    durability: PropTypes.number,
    intelligence: PropTypes.number,
    power: PropTypes.number,
    speed: PropTypes.number,
    strength: PropTypes.number
  }),
  setFilterStats: PropTypes.func.isRequired,
  resetFilterStats: PropTypes.func.isRequired
}

export default PowerstatsFilter

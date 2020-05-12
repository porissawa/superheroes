import React from 'react'
import PropTypes from 'prop-types'

import './heroList.scss'

const HeroList = ({
  heroArray = [],
  onHeroClick
}) => {
  return (
    <div className='hero-list-container'>
      <ul className='hero-list'>
        {heroArray.map(el => (
          <li
            key={el.id}
            onClick={() => onHeroClick(el)}
            className='hero-li'
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

HeroList.propTypes = {
  heroArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    powerstats: PropTypes.shape({
      intelligence: PropTypes.string,
      strength: PropTypes.string,
      speed: PropTypes.string,
      durability: PropTypes.string,
      power: PropTypes.string,
      combat: PropTypes.string
    }),
    biography: PropTypes.shape({
      'full-name': PropTypes.string,
      'alter-egos': PropTypes.string,
      aliases: PropTypes.arrayOf(PropTypes.string),
      'place-of-birth': PropTypes.string,
      'first-appearance': PropTypes.string,
      publisher: PropTypes.string,
      alignment: PropTypes.string
    }),
    appearance: PropTypes.shape({
      gender: PropTypes.string,
      race: PropTypes.string,
      height: PropTypes.arrayOf(PropTypes.string),
      weight: PropTypes.arrayOf(PropTypes.string),
      'eye-color': PropTypes.string,
      'hair-color': PropTypes.string
    }),
    work: PropTypes.shape({
      occupation: PropTypes.string,
      base: PropTypes.string
    }),
    connections: PropTypes.shape({
      'group-affiliation': PropTypes.string,
      relatives: PropTypes.string
    }),
    image: PropTypes.shape({
      url: PropTypes.string
    })
  })).isRequired,
  onHeroClick: PropTypes.func.isRequired
}

export default HeroList

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import isMatchWith from 'lodash.ismatchwith'

import Filters from '../../components/filters/Filters'
import HeroList from '../../components/list/HeroList'
import Header from '../../components/header/Header'
import HeroModal from './components/HeroModal'
import Spinner from '../../components/spinner/Spinner'
import { fetchAllHeroesList } from '../heroList/redux/heroes'
import { allLetters, TOTAL_NUMBER_OF_HEROES } from '../../helpers/utils'

import './App.scss'

function App () {
  const dispatch = useDispatch()
  const sortedHeroesArray = useSelector(state => state.heroesReducer.heroesArray, shallowEqual)
  const isPopulatingDone = useSelector(state => state.heroesReducer.isInitialFetchDone)
  const missingSeedLetters = useSelector(state => state.heroesReducer.failedFetchingLetters)

  const [query, setQuery] = useState('')
  const [stats, setStats] = useState({})
  const [selectedHero, setSelectedHero] = useState(null)

  useEffect(() => {
    dispatch(fetchAllHeroesList(allLetters))
  }, [dispatch])

  useEffect(() => {
    if (isPopulatingDone && missingSeedLetters.length > 0 && sortedHeroesArray.length < TOTAL_NUMBER_OF_HEROES) {
      dispatch(fetchAllHeroesList(missingSeedLetters))
    }
  }, [isPopulatingDone, missingSeedLetters, sortedHeroesArray, dispatch])

  const filterHeroes = (e, query) => {
    setQuery(query)
    e.preventDefault()
  }

  const heroClick = hero => {
    setSelectedHero(hero)
  }

  const deselectHero = () => {
    setSelectedHero(null)
  }

  const setFilterStats = ({statName, value}) => {
    setStats(prevState => {
      return {...prevState, [statName]: value}
    })
  }

  const resetFilterStats = () => {
    setStats({})
  }

  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <Filters
          filterHeroes={filterHeroes}
          setFilterStats={setFilterStats}
          resetFilterStats={resetFilterStats}
          stats={stats}
          query={query}
        />
        {!isPopulatingDone
          ? <Spinner />
          : (
            <HeroList
              heroArray={sortedHeroesArray
                .filter(
                  el => el.name.toLowerCase().includes(query.toLowerCase())
                  && isMatchWith(
                      el.powerstats,
                      stats,
                      (objVal, srcVal) => +objVal >= srcVal
                    )
                )
              }
              onHeroClick={heroClick}
            />
          )
        }
        
      </div>
      {selectedHero && (
        <>
          <HeroModal
            hero={selectedHero}
            deselectHero={deselectHero}
          />
          
        </>
      )}
    </div>
  )
}

export default App

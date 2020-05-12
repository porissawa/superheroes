import axiosWrapper from '../../../helpers/http'

// Action types
const FETCH_REQUEST = 'hero-list/FETCH_REQUEST'
const FETCH_FAILURE = 'hero-list/FETCH_FAILURE'
const FETCH_SUCCESS = 'hero-list/FETCH_SUCCESS'
const INITIAL_FETCH_FINISHED = 'hero-list/INITIAL_FETCH_FINISHED'

// Reducer
const initialState = {
  isFetching: false,
  isInitialFetchDone: false,
  error: '',
  heroesObject: {},
  heroesArray: [],
  failedFetchingLetters: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
        isInitialFetchDone: false,
        error: ''
      }
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        heroesObject: Object.assign(
          { ...state.heroesObject },
          action.response
            // disabled since it feeds curr to acc[curr.name] and the acc itself
            // back to acc, effectively spreading without creating an extra copy.
            // eslint-disable-next-line no-sequences
            .reduce((acc, curr) => (acc[curr.name] = curr, acc), {}))
      }
    case INITIAL_FETCH_FINISHED:
      return {
        ...state,
        isFetching: false,
        isInitialFetchDone: true,
        failedFetchingLetters: action.failures,
        heroesArray: Object.values(state.heroesObject).sort((a, b) => +a.id - +b.id)
      }
    default:
      return state
  }
}

// Action creators
function fetchRequest () {
  return { type: FETCH_REQUEST }
}

function fetchFailure (error) {
  return {
    type: FETCH_FAILURE,
    error
  }
}

function fetchSuccess (response) {
  return {
    type: FETCH_SUCCESS,
    response
  }
}

function initialFetchDone (failures) {
  return {
    type: INITIAL_FETCH_FINISHED,
    failures
  }
}

export function fetchAllHeroesList (letterArray) {
  return async (dispatch) => {
    dispatch(fetchRequest())
    const failedQueries = []

    await Promise.all(letterArray.map(async letter => {
      try {
        const response = await axiosWrapper({
          method: 'get',
          url: `/search/${letter}`,
          timeout: 3000
        })
        if (response.data.response === 'error') {
          await dispatch(fetchFailure(response.data.error))
        } else {
          await dispatch(fetchSuccess(response.data.results))
        }
      } catch (err) {
        await dispatch(fetchFailure(err))
        failedQueries.push(letter)
      }
    }))
      .finally(() => dispatch(initialFetchDone(failedQueries)))
  }
}

export function fetchHeroById (heroId) {
  return async (dispatch) => {
    dispatch(fetchRequest())
    try {
      const response = await axiosWrapper({
        method: 'get',
        url: `/${heroId}`,
        timeout: 5000
      })
      if (response.data.response === 'error') {
        dispatch(fetchFailure(response.data.error))
      } else {
        dispatch(fetchSuccess([response.data]))
      }
    } catch (e) {
      dispatch(fetchFailure(e))
      throw e
    }
  }
}

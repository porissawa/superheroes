import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunkMiddleware from 'redux-thunk'

import HeroListReducers from './pages/heroList/redux'

const rootReducer = combineReducers({
  ...HeroListReducers,
})

const middleware = [thunkMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

export default store
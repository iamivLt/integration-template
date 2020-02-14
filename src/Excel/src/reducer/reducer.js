import { combineReducers } from 'redux'
import { reducerWidget } from './reducerWidget'

export const reducer = combineReducers({
  control: reducerWidget
})

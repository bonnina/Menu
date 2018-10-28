import { combineReducers } from 'redux'
import details from './details'
import order from './order'
​
export default combineReducers({
  details,
  order
});
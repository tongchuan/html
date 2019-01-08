import { combineReducers } from 'redux';
import newsReducers from './newsReducers';
import newsTypeReducers from './newsTypeReducers';
export default combineReducers({
	newsReducers,
	newsTypeReducers
})
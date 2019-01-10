import { combineReducers } from 'redux';
import newsReducers from './newsReducers';
import newsTypeReducers from './newsTypeReducers';
import commonReducers from './commonReducers'
export default combineReducers({
	commonReducers,
	newsReducers,
	newsTypeReducers
})
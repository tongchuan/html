import { combineReducers } from 'redux';
import alertReducers from './alertReducers';
import newsReducers from './newsReducers';
import newsTypeReducers from './newsTypeReducers';
import commonReducers from './commonReducers'
import adminReducers from './adminReducers'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
	routing:routerReducer,
	alertReducers,
	commonReducers,
	newsReducers,
	newsTypeReducers,
	adminReducers
})
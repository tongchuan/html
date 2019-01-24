import { combineReducers } from 'redux';
import newsReducers from './newsReducers';
import newsTypeReducers from './newsTypeReducers';
import commonReducers from './commonReducers'
import adminReducers from './adminReducers'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
	routing:routerReducer,
	commonReducers,
	newsReducers,
	newsTypeReducers,
	adminReducers
})
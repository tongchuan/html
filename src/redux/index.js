import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import myMiddlewares from './middlewares/myMiddlewares'
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory, browserHistory } from 'history';
export const history  = createBrowserHistory()
const loggerMiddleware = createLogger({})

export default function configureStore(preloadedState){
	return createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(
			thunkMiddleware,
			myMiddlewares,
			routerMiddleware(history)
	      	// loggerMiddleware
		)
	)
}

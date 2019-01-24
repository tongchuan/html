import "babel-polyfill";
import React from 'react';
import ReactDom from 'react-dom';
import { Provider,connect } from 'react-redux';
import configureStore, { history } from './redux'
import Home from '@/containers/Home'
import NewsTypeAdd from '@/containers/news/NewsTypeAdd';
import AdminList from '@/containers/admin/AdminList';
import AdminLogin from '@/containers/admin/AdminLogin';
import PrivateRoute from '@/router/PrivateRoute'
import { BrowserRouter, Router, Route, Redirect,Link,IndexRoute,Switch } from 'react-router-dom'
// import { Router, Route } from 'react-router'

import { ConnectedRouter } from 'react-router-redux'
import App from '@/App'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@/styles/main.less'

const store = configureStore(history)

// console.log(history);

// class PrivateRouteContainer extends React.Component {
//   render() {
//     const {
//       isAuthenticated,
//       component: Component,
//       ...props
//     } = this.props

//     return (
//       <Route
//         {...props}
//         render={props =>
//           isAuthenticated
//             ? <Component {...props} />
//             : (
//             <Redirect to={{
//               pathname: '/login',
//               state: { from: props.location }
//             }} />
//           )
//         }
//       />
//     )
//   }
// }

// const PrivateRoute = connect(state => ({
//   isAuthenticated: state.authReducer.isAuthenticated
// }))(PrivateRouteContainer)


// class LoginContainer extends React.Component {
//   render() {
//     return <button onClick={this.props.login}>Login Here!</button>
//   }
// }
// const Login = connect(null, dispatch => ({
//   login: () => {
//     dispatch(authSuccess())
//     dispatch(push('/'))
//   }
// }))(LoginContainer)
// const history  = syncHistoryWithStore(createBrowserHistory(),store)

// history  = syncHistoryWithStore(history,store)
// function App(){
// 	console.log(this);
// 	return 
// 	// return (<div>{this.props.children}</div>) 
// }
// console.log(history);
// const history = createBrowserHistory()
ReactDom.render(
 <Provider store={store}>
	 <ConnectedRouter store={store} history={history}>
	 	<Switch>
 			<Route path="/login" component={AdminLogin} />
 			<PrivateRoute exact path="/" islogin component={Home} />
 			<PrivateRoute path="/admin" islogin component={AdminList} />
 			<PrivateRoute path="/newstypeadd" component={NewsTypeAdd} />
 		</Switch>
	 </ConnectedRouter>
 	{/*
 		
 	*/}
  {/*<Router history={history}>
  	<Route component={App}>
  		<IndexRoute component={Home}/>
  		<Route path="" component={Home} />
  		<Route path="/admin" component={AdminList} />
  		<Route path="/newstypeadd" component={NewsTypeAdd} />
  	</Route>
  </Router>*/}
 </Provider>,
 document.getElementById('root')
)
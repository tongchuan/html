import "babel-polyfill";
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './redux'
import Home from '@/containers/Home'
import NewsTypeAdd from '@/containers/news/NewsTypeAdd';
import AdminList from '@/containers/admin/AdminList';
import AdminLogin from '@/containers/admin/AdminLogin';
import PrivateRoute from '@/router/PrivateRoute'
import { Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/main.less'

const store = configureStore(history)
ReactDom.render(
 <Provider store={store}>
	 <ConnectedRouter store={store} history={history}>
	 	<Switch>
 			<PrivateRoute path="/login" component={AdminLogin} />
 			<PrivateRoute exact path="/" islogin isheard component={Home} />
 			<PrivateRoute path="/admin" islogin isheard component={AdminList} />
 			<PrivateRoute path="/newstypeadd" isheard component={NewsTypeAdd} />
 		</Switch>
	 </ConnectedRouter>
 </Provider>,
//  document.body
 document.getElementById('root')
)
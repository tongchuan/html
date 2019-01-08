import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect,Link } from 'react-router-dom'
import configureStore from './redux'
import App from '@/containers/App'
import Home from '@/containers/Home'
import NewsTypeAdd from '@/containers/news/NewsTypeAdd'

import './styles/main.less'
const store = configureStore()
const supportsHistory = 'pushState' in window.history;

ReactDom.render(
	<Provider store={store}>
	<BrowserRouter basename="/" forceRefresh={!supportsHistory}>
		<div>
            <ul>
              <li><Link to='/'>首页</Link></li>
              <li><Link to='/about'>关于</Link></li>
              <li><Link to='/newstypeadd'>newadd</Link></li>
            </ul>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={App} />
            <Route path='/newstypeadd' component={NewsTypeAdd} />
          </div>

		{/*<Route path="/" component={Home}>
			<Route path="/" component={Home} />
			<Route path="/home" component={Home} />
		</Route>*/}

	</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

if (module.hot) {
  module.hot.accept(function() {
  	console.log('module.hot');
  });
}
// import React from 'react';
// import ReactDom from 'react-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter, Route, Redirect,Link } from 'react-router-dom'
// import configureStore from './redux'
// import App from '@/containers/App'
// import Home from '@/containers/Home'
// import NewsTypeAdd from '@/containers/news/NewsTypeAdd';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/main.less'
// const store = configureStore()
// const supportsHistory = 'pushState' in window.history;
// console.log(store.getState().messageReducers);
// ReactDom.render(
// 	<Provider store={store}>
// 	<BrowserRouter basename="/" forceRefresh={!supportsHistory}>
// 		<div>
//             <ul>
//               <li>{store.getState().messageReducers.text}</li>
//               <li><Link to='/'>首页</Link></li>
//               <li><Link to='/admin'>admin</Link></li>
//               <li><Link to='/newstypeadd'>newadd</Link></li>
//             </ul>
//             <Route exact path='/' component={Home} />
//             <Route path='/admin' component={App} />
//             <Route path='/newstypeadd' component={NewsTypeAdd} />
//           </div>
// 	</BrowserRouter>
// 	</Provider>,
// 	document.getElementById('root')
// )

// if (module.hot) {
//   module.hot.accept(function() {
//   	console.log('module.hot');
//   });
// }


import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter, Route, Redirect,Link } from 'react-router-dom'
import configureStore from './redux'
import App from '@/containers/App'
// import Home from '@/containers/Home'
// import NewsTypeAdd from '@/containers/news/NewsTypeAdd';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/main.less'
const store = configureStore()
// const supportsHistory = 'pushState' in window.history;
// console.log(store.getState().messageReducers);
ReactDom.render(
 <Provider store={store}>
  <App />
 </Provider>,
 document.getElementById('root')
)
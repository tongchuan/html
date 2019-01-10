// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// export default class App extends Component {
// 	constructor(props){
// 		super(props)
// 	}

// 	render(){
// 		console.log(this.props);
// 		return (
// 			<div className="app">
// 			ddd
// 				{this.props.children}
// 			</div>
// 		)
// 	}
// }


import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Router, Route, Redirect,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import commonActions from '@/redux/actions/commonActions'
// import configureStore from './redux'
// import App from '@/containers/App'
import Home from '@/containers/Home'
import NewsTypeAdd from '@/containers/news/NewsTypeAdd';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/main.less'
const supportsHistory = 'pushState' in window.history;


@connect(
	(state,ownProps)=>{
		// return state.commonStateInitData;
		// 用来显示 请求错误，全局的遮罩层等等
		return {commonState: state.commonReducers}
		// return state;
	},
	(dispatch,ownProps)=>{
		// console.log(['mapDispatchToProps',dispatch,ownProps]);
		return {actions: bindActionCreators(commonActions, dispatch)}
	},)
export default class App extends React.Component{
	constructor(props){
		super(props)
		// console.log(this);
	}
	render(){
		return (
			<BrowserRouter basename="/" forceRefresh={!supportsHistory}>
				<div>
					{this.props.commonState.text}
					<Route exact path='/' component={Home} />
					<Route path='/admin' component={NewsTypeAdd} />
					<Route path='/newstypeadd' component={NewsTypeAdd} />
				</div>
			</BrowserRouter>
		)
	}
}

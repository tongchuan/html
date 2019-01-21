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
import PropTypes from 'prop-types'
import { BrowserRouter, Router, Route, Redirect,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Alert} from 'react-bootstrap';
import commonActions from '@/redux/actions/commonActions'
// import configureStore from './redux'
// import App from '@/containers/App'
import Home from '@/containers/Home'
import NewsTypeAdd from '@/containers/news/NewsTypeAdd';
import AdminList from '@/containers/admin/AdminList';
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
	static childContextTypes = {
	    propA: PropTypes.string,
	    methodA: PropTypes.func
	  }
  
  // 返回Context对象，方法名是约定好的
  getChildContext () {
    return {
      propA: 'propA11111111111111111111',
      methodA: () => 'methodA'
    }
  }

	// getChildContext(){
	// 	return {
	// 		name: 'zhang',
	// 		age: 1111
	// 	}
	// }
	render(){
		const jiancha = function(...arr){
			console.log(arr);
		}
		return (
			<BrowserRouter basename="/" forceRefresh={!supportsHistory}>
				<div className="container-fluid">
					{/*<div className="alert-message-body" style="">*/}
						<Alert bsStyle="warning" className="alert-message" style={{display:this.props.commonState.text?'block': 'none'}}>
						  <strong>{this.props.commonState.text}!</strong> Best check yo self, you're not looking too
						  good.
						  <span onClick={this.props.actions.close} className="glyphicon glyphicon-remove-circle close"></span>
						</Alert>
					{/*</div>*/}
					{/*{this.props.commonState.text}*/}
					<Route exact path='/' component={Home} />
					<Route path='/admin' onEnter={jiancha} component={AdminList} />
					<Route path='/newstypeadd' onEnter={jiancha} component={NewsTypeAdd} />
				</div>
			</BrowserRouter>
		)
	}
}

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
import AppRouter from './AppRouter';

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
	},(stateProps, dispatchProps, ownProps)=>{
		return Object.assign({}, ownProps, stateProps, dispatchProps)
	},{pure:true})
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
  componentWillMount(){

  }
  componentDidMount(){
  	console.log('ddd');
  }
  componentWillReceiveProps(nextProps){
  	console.log('nextProps');
  }
  shouldComponentUpdate(){
  	return true;
  }
  componentWillUpdate(){

  }
  componentDidUpdate(){

  }
  componentWillUnmount(){

  }

	// getChildContext(){
	// 	return {
	// 		name: 'zhang',
	// 		age: 1111
	// 	}
	// }
	render(){
		console.log('===',window.localhost);
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
					{
						AppRouter.map((item)=>{
							return (<Route exact={item.exact} path={item.path} component={item.component} />)
						})
					}
					{/*<Route exact path='/' component={Home} />
					<Route path='/admin' exact component={AdminList} />
					<Route path='/newstypeadd' component={NewsTypeAdd} />*/}
				</div>
			</BrowserRouter>
		)
	}
}

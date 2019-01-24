

import React from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter, Router, Route, Redirect,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import commonActions from '@/redux/actions/commonActions'
import { push } from 'react-router-redux'
@connect((state,ownProps)=>{
	// console.log(state);
		// return state.commonStateInitData;
		// 用来显示 请求错误，全局的遮罩层等等
		// console.log(state);
		return {commonState: state.commonReducers, adminState: state.adminReducers}
		// return state;
	},
	(dispatch,ownProps)=>{

		console.log([dispatch,ownProps]);
		// console.log(['mapDispatchToProps',dispatch,ownProps]);
		return {actions: bindActionCreators(commonActions, dispatch)}
	},(stateProps, dispatchProps, ownProps)=>{
		return Object.assign({}, ownProps, stateProps, dispatchProps)
	},{pure:true})
export default class PrivateRoute extends React.Component{
	constructor(props){
		super(props);
		// console.log(this);
	}
	render(){
		console.log(this.props);
		// console.log(push('/login'));
		let {component:Component, islogin} = this.props
		// if(islogin){
		// 	push('/login')
		// 	return null;
		// }
		if(this.props.islogin && !this.props.adminState.islogin){
			return (<Redirect to='/login'></Redirect>)
		}
		return (
			<Route {...this.props} render={(props)=><Component {...props} />}></Route>
		)
	}
}
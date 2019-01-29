

import React from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter, Router, Route, Redirect,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import alertActions from '@/redux/actions/common/alertActions';
import HeadAlert from '@/components/common/HeadAlert';
import Header from '@/components/common/Header';
@connect((state,ownProps)=>{
	return {commonState: state.commonReducers, alertState: state.alertReducers, adminState: state.adminReducers}
},(dispatch,ownProps)=>{
	return {actions: bindActionCreators(alertActions, dispatch)}
},(stateProps, dispatchProps, ownProps)=>{
	return Object.assign({}, ownProps, stateProps, dispatchProps)
},{pure:true})
export default class PrivateRoute extends React.Component{
	constructor(props){
		super(props);
		this.autoCloseID = null
	}
	componentWillReceiveProps(props){
		if(props.alertState.autoClose){
			this.autoCloseID && clearTimeout(this.autoCloseID)
			this.autoCloseID = setTimeout(()=>{
				props.actions.closeAlert()
			},props.alertState.time)
		}
	}
	render(){
		let Component = this.props.component
		if(this.props.islogin && !this.props.adminState.islogin){
			return (<Redirect to='/login'></Redirect>)
		}
		return (
			<div className="container-fluid">
				<HeadAlert {...this.props.alertState} close={this.props.actions.closeAlert} />
				{this.props.isheard ? <Header /> : null}
				<Route {...this.props} render={(props)=><Component {...props} />}></Route>
			</div>
		)
	}
}
PrivateRoute.defaultProps = {
	islogin: false,
	isheard: false,
    component: null,
};
PrivateRoute.propTypes = {
    islogin: PropTypes.bool,
    component: PropTypes.element,
    isheard: PropTypes.bool,
};
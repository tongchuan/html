import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table } from 'react-bootstrap';
import adminActions from '@/redux/actions/adminActions';
import Header from '@/components/common/Header';
@connect(
	(state,ownProps)=>{
		// console.log(state);
		return {adminState: state.adminReducers}
	},
	(dispatch,ownProps)=>{
		return {actions: bindActionCreators(adminActions, dispatch)}
	},
	(stateProps, dispatchProps, ownProps)=>{
		return Object.assign({}, ownProps, stateProps, dispatchProps)
	},{
		pure: true,
		withRef: false
	}
)
export default class AdminList extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	static contextTypes = {
	    propA: PropTypes.string,
	    methodA: PropTypes.fun
	}
	componentDidMount(){
		// this.props.actions.getlist({name:111})
		// this.props.actions.getItem(111)
	}
	render(){
		// console.log(this);
		return (
			<div>
			<Header />
				AdminLogin
			</div>
		)
		// return (
		// 	<div>
		// 		NewsTypeAdd
				
		// 	</div>
		// )
	}
}

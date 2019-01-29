import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form, FormGroup, FormControl, Col, ControlLabel, Button, Checkbox } from 'react-bootstrap';
import adminActions from '@/redux/actions/adminActions';
@connect(
	(state,ownProps)=>{
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
		this.login = this.login.bind(this)
		this.state = {
		}
	}
	static contextTypes = {
	    propA: PropTypes.string,
	    methodA: PropTypes.fun
	}
	login(){
		console.log(this)
	}
	componentDidMount(){

	}
	render(){
		return (
			<div className="user_login">
				<h3>Login</h3>
				<Form horizontal>
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
						Email
						</Col>
						<Col sm={10}>
						<FormControl type="email" placeholder="Email" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalPassword">
						<Col componentClass={ControlLabel} sm={2}>
						Password
						</Col>
						<Col sm={10}>
							<FormControl type="password" placeholder="Password" />
						</Col>
					</FormGroup>
					<FormGroup>
						<Col smOffset={2} sm={10}>
						<Button onClick={this.login} type="button">Sign in</Button>
						</Col>
					</FormGroup>
				</Form>
				<ul>
					<li><a href="#">Create account</a></li>
					<li><a href="#">Forget password</a></li>
				</ul>
				{/* <div onClick={this.props.actions.showAlertSuccess.bind(this,{title:'zhangtongchuan'})}>show</div> */}
			</div>
		)
	}
}

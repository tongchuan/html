import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import newActions from '../redux/actions/newsActions'
// connect(mapStateToProps(state,ownProps),mapDispatchToProps(dispatch,ownProps),mergeProps(stateProps, dispatchProps, ownProps),option)
@connect(
	(state,ownProps)=>{
		// console.log(['mapStateToProps',state]);
		return {newsState: state.newsReducers}
	},
	(dispatch,ownProps)=>{
		// console.log(['mapDispatchToProps',dispatch,ownProps]);
		return {actions: bindActionCreators(newActions, dispatch)}
	},
	(stateProps, dispatchProps, ownProps)=>{
		// console.log(['mergeProps',stateProps, dispatchProps, ownProps]);
		return Object.assign({}, ownProps, stateProps, dispatchProps)
		// return Object.assign({}, ownProps, {
		//     todos: stateProps.todos[ownProps.userId],
		//     addTodo: text => dispatchProps.addTodo(ownProps.userId, text)
		//   })
	},{
		pure: true,
		withRef: false
	}
)
export default class Home extends Component {
	constructor(props){
		super(props)
		// console.log(props);
		// console.log(this);
	}
	componentDidMount(){
		// this.props.actions.getItem(111)
	}
	render(){
		console.log(this.props.newsState);
		return (
			<div>
				<ul>
					<li>name: {this.props.newsState.name}</li>
					<li>age: {this.props.newsState.age}</li>
					<li>random: {this.props.newsState.random}</li>
					<li><input type="button" value="获取数据" onClick={this.props.actions.getItem.bind(this,Math.random())} /></li>
				</ul>
				
			</div>
		)
	}
}
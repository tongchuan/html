import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Router, Route, Redirect,Link } from 'react-router-dom'

export default class Header extends Component{
	constructor(props,content){
		// console.log(content);
		super(props)
		// console.log(this);
	}
	static contextTypes = {
	    propA: PropTypes.string,
	    methodA: PropTypes.fun
	}
	render() {
		return (
			<div className="navbar navbar-default">
				<div className="navbar-header">
				 	<a href="" className="navbar-brand">ZHANGTCH</a>
				</div>
				<div className="navbar-collapse collapse">
					<ul className="nav navbar-nav">
						<li><Link to='/'>首页</Link></li>
						<li><Link to='/admin'>用户管理</Link></li>
						<li><Link to='/newstypeadd'>newadd</Link></li>
					</ul>
				</div>
			</div>
		)
	}
}
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Router, Route, Redirect,Link } from 'react-router-dom'

export default class Header extends Component{
	constructor(props){
		super(props)
	}
	render() {
		return (
			<ul>
				<li><Link to='/'>首页</Link></li>
				<li><Link to='/admin'>admin</Link></li>
				<li><Link to='/newstypeadd'>newadd</Link></li>
			</ul>
		)
	}
}
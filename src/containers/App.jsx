import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
	constructor(props){
		super(props)
	}

	render(){
		console.log(this.props);
		return (
			<div className="app">
			ddd
				{this.props.children}
			</div>
		)
	}
}
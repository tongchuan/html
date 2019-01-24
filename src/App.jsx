import React from 'react';

export default class App extends React.Component {
	constructor(props){
		super(props)
		// console.log(this.props);
	}
	render(){
		console.log(React.Children);
		console.log(this.props.children);
		return <div>{this.props.children}</div>
	}
}
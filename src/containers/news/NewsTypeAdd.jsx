import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form, FormGroup,FormControl, Col, ControlLabel,Button } from 'react-bootstrap';
import newTypeActions from '@/redux/actions/newsTypeActions';
@connect(
	(state,ownProps)=>{
		console.log(state);
		return {newsTypeState: state.newsTypeReducers}
	},
	(dispatch,ownProps)=>{
		return {actions: bindActionCreators(newTypeActions, dispatch)}
	},
	(stateProps, dispatchProps, ownProps)=>{
		return Object.assign({}, ownProps, stateProps, dispatchProps)
	},{
		pure: true,
		withRef: false
	}
)
export default class NewsTypeAdd extends Component {
	constructor(props){
		super(props)
		this.onChangeInput = this.onChangeInput.bind(this)
		this.state = {
			data: {
				parentid:'',
				name:'name'+Math.random(),
				cnname:'cnname'+Math.random(),
				enname:'enname'+Math.random(),
				link_nav:'link_nav'+Math.random(),
				content_nav:'content_nav'+Math.random(),
				tags:'tags'+Math.random(),
				tags_seo:'tags_seo'+Math.random(),
				keyword:'keyword'+Math.random(),
				remark:'remark'+Math.random(),
				small_pic:'small_pic'+Math.random(),
				big_pic:'big_pic'+Math.random(),
				link:'link'+Math.random(),
				link_spic:'link_spic'+Math.random(),
				link_bpic:'link_bpic'+Math.random(),
				show:0,
				status:0,
				hot:0,
				top:0,
				recommend:0,
				comm:0,
				vote:0,
				delete:0,
				create_man:'',
				create_time:'',
				modify_man:'',
				modify_time:'',
				order:0
			}
		}
	}
	componentDidMount(){
		// this.props.actions.getItem(111)
	}
	onChangeInput(item,index,event){
		let data = this.state.data;
		data[item] = event.target.value;
		this.setState({
			data
		})
	}
	render(){

		return (
			<Form horizontal>
				{Object.keys(this.state.data).map((item,index)=>{
					return (
						<FormGroup>
						    <Col sm={2}>
						      {item}:
						    </Col>
						    <Col sm={10}>
						      <FormControl onChange={this.onChangeInput.bind(this,item,index)} type="text" value={this.state.data[item]} placeholder={item} />
						    </Col>
						</FormGroup>
					)
				})}
				<FormGroup>
				    <Col smOffset={2} sm={10}>
				      <Button onClick={this.props.actions.saveData.bind(this,this.state.data)} type="button">Sign in</Button>
				    </Col>
				</FormGroup>
			</Form>

		)
		// return (
		// 	<div>
		// 		NewsTypeAdd
				
		// 	</div>
		// )
	}
}
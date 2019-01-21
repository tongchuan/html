import axios from '@/constants/axios';
import config from '@/constants/config';
import types from '@/redux/types/adminTypes';
import commonTypes from '@/redux/types/commonTypes'

export default {
	add(data){
		return (dispatch, getState, api) => {
			axios({
				method: 'post',
				dispatch,
			    url: config.admin.add,
			      data: JSON.stringify(data),
			      headers: {
			        'Accept': '*/*',
			        'Content-Type': 'application/json;charset=utf-8'
			      }
			}).then((data)=>{
				if(data.isSuccess){
					dispatch({type: types.ADMIN_ADD, data: {dataList: data.data} })
				}else{
					dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: data.message} })
				}
			}).catch((error)=>{
				dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: error.toString()} })
			})
		}
	},
	modify(data){
		return (dispatch, getState, api) => {
			axios({
				method: 'post',
				dispatch,
			    url: config.admin.modify,
			      data: JSON.stringify(data),
			      headers: {
			        'Accept': '*/*',
			        'Content-Type': 'application/json;charset=utf-8'
			      }
			}).then((data)=>{
				if(data.isSuccess){
					dispatch({type: types.ADMIN_MODIFY, data: {dataList: data.data} })
				}else{
					dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: data.message} })
				}
			}).catch((error)=>{
				dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: error.toString()} })
			})
		}
	},
	getlist(data){
		return (dispatch, getState, api) => {
			axios({
				method: 'post',
				dispatch,
			    url: config.admin.getlist,
			      data: JSON.stringify(data),
			      headers: {
			        'Accept': '*/*',
			        'Content-Type': 'application/json;charset=utf-8'
			      }
			}).then((data)=>{
				if(data.isSuccess){
					dispatch({type: types.ADMIN_GET_LIST, data: {dataList: data.data} })
				}else{
					dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: data.message} })
				}
			}).catch((error)=>{
				dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: error.toString()} })
			})
		}
	},
	register(data){
		return (dispatch, getState, api) => {
			axios({
				method: 'post',
				dispatch,
			    url: config.admin.register,
			      data: JSON.stringify(data),
			      headers: {
			        'Accept': '*/*',
			        'Content-Type': 'application/json;charset=utf-8'
			      }
			}).then((data)=>{
				if(data.isSuccess){
					dispatch({type: types.ADMIN_REGISTER, data: {dataList: data.data} })
				}else{
					dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: data.message} })
				}
			}).catch((error)=>{
				dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: error.toString()} })
			})
		}
	},
	signin(data){
		return (dispatch, getState, api) => {
			axios({
				method: 'post',
				dispatch,
			    url: config.admin.signin,
			      data: JSON.stringify(data),
			      headers: {
			        'Accept': '*/*',
			        'Content-Type': 'application/json;charset=utf-8'
			      }
			}).then((data)=>{
				if(data.isSuccess){
					dispatch({type: types.ADMIN_SIGNIN, data: {dataList: data.data} })
				}else{
					dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: data.message} })
				}
			}).catch((error)=>{
				dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: error.toString()} })
			})
		}
	},
	issignin(data){
		return (dispatch, getState, api) => {
			axios({
				method: 'post',
				dispatch,
			    url: config.admin.issignin,
			      data: JSON.stringify(data),
			      headers: {
			        'Accept': '*/*',
			        'Content-Type': 'application/json;charset=utf-8'
			      }
			}).then((data)=>{
				if(data.isSuccess){
					dispatch({type: types.ADMIN_ISSIGNIN, data: {dataList: data.data} })
				}else{
					dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: data.message} })
				}
			}).catch((error)=>{
				dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: error.toString()} })
			})
		}
	},
	signout(data){
		return (dispatch, getState, api) => {
			axios({
				method: 'post',
				dispatch,
			    url: config.admin.signout,
			      data: JSON.stringify(data),
			      headers: {
			        'Accept': '*/*',
			        'Content-Type': 'application/json;charset=utf-8'
			      }
			}).then((data)=>{
				if(data.isSuccess){
					dispatch({type: types.ADMIN_SIGOUT, data: {dataList: data.data} })
				}else{
					dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: data.message} })
				}
			}).catch((error)=>{
				dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: error.toString()} })
			})
		}
	},
	modifypwd(data){
		return (dispatch, getState, api) => {
			axios({
				method: 'post',
				dispatch,
			    url: config.admin.modifypwd,
			      data: JSON.stringify(data),
			      headers: {
			        'Accept': '*/*',
			        'Content-Type': 'application/json;charset=utf-8'
			      }
			}).then((data)=>{
				if(data.isSuccess){
					dispatch({type: types.ADMIN_MODIFYPWD, data: {dataList: data.data} })
				}else{
					dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: data.message} })
				}
			}).catch((error)=>{
				dispatch({type: commonTypes.MESSAGE_TYPE, data: {text: error.toString()} })
			})
		}
	}
}

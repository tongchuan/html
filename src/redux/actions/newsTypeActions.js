import axios from '@/constants/axios';
import config from '@/constants/config';
import types from '@/redux/types/newsTypeTypes'
export default {
	getItem(params){
		// console.log(data);
		return (dispatch,getState,api)=>{
			// console.log(getState());
			// console.log([dispatch,getState,statue]);
			axios.get(config.user.user,{
				params: {
					data:params
				}
			}).then((response)=>{
				let data = response.data
				data.random = params
				dispatch({type:types.NEWS_GET_ITEM,data})
				// console.log(response);
			}).catch((error)=>{
				console.log(error);
			})
		}
		
	},
	getList(data){
		return (dispatch, getState, api) => {
			axios({
				method: 'post',
				dispatch,
			    url: config.news.typequery,//'http://127.0.0.1/news/typequery', // 'http://127.0.0.1/admin/login',//
			      // url: 'http://127.0.0.1:8888/mysql',
			      // data: JSON.stringify(data),
			      // params: {data},
			      data: data,
			      headers: {
			        'Accept': '*/*',
			        'Content-Type': 'application/json;charset=utf-8'
			        // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
			      }
			}).then((data)=>{
				// let data = {dataList:}
				// console.log(['=========',data]);
				dispatch({type: types.NEWS_TYPE_LIST_DATA, data: {dataList: data} })
				
			}).catch((error)=>{

			})
		}
	},
	saveData(data){
		// console.log(data);
		// return;
		return (dispatch, getState, api) => {
			axios({
		      method: 'post',
		      // url: 'http://97.64.37.117:8888/news/typeadd',
		      url: config.news.typeadd,//'http://127.0.0.1/news/typeadd',
		      // url: 'http://127.0.0.1:8888/mysql',
		      data: JSON.stringify(data),
		      headers: {
		        'Accept': '*/*',
		        'Content-Type': 'application/json;charset=utf-8'
		        // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
		      }
		    }).then((response)=>{
		    	console.log(response);
		    }).catch((error)=>{
				console.log(error);
		    })
		}
	}
}
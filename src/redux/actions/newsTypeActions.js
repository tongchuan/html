import axios from '../../constants/axios'
import types from '../types/newsTypes'
export default {
	getItem(params){
		// console.log(data);
		return (dispatch,getState,api)=>{
			// console.log(getState());
			// console.log([dispatch,getState,statue]);
			axios.get('http://97.64.37.117:8888/user',{
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
	saveData(data){
		console.log(data);
		// return;
		return (dispatch, getstate, api) => {
			axios({
		      method: 'post',
		      url: 'http://97.64.37.117:8888/news/typequery',
		      // url: 'http://127.0.0.1:8888/mysql',
		      data: JSON.stringify(data),
		      headers: {
		        'Accept': '*/*',
		        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
		      }
		    }).then((response)=>{
		    	console.log(response);
		    }).catch((error)=>{
				console.log(error);
		    })
			// axios({
		 //      method: 'get',
		 //      url: 'http://97.64.37.117:8888/news/typeadd',
		 //      params: data,
		 //      headers: {
		 //        'Accept': '*/*',
		 //        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
		 //      }
		 //    }).then((response)=>{
		 //    	console.log(response);
		 //    }).catch((error)=>{
			// 	console.log(error);
		 //    })
		}
			// axios.get('http://97.64.37.117:8888/news/typeadd',{params:data}).then((response)=>{
			// 	console.log(response);
			// 	// let data = response.data
			// 	// data.random = params
			// 	// dispatch({type:types.NEWS_GET_ITEM,data})
			// 	// console.log(response);
			// }).catch((error)=>{
			// 	console.log(error);
			// })
		// 	axios.post('http://97.64.37.117:8888/news/typeadd',data,{
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  //         "Access-Control-Allow-Origin": "*",
  //       }
  //     }).then((response)=>{
		// 		console.log(response);
		// 		// let data = response.data
		// 		// data.random = params
		// 		// dispatch({type:types.NEWS_GET_ITEM,data})
		// 		// console.log(response);
		// 	}).catch((error)=>{
		// 		console.log(error);
		// 	})
		// }
		// console.log(data);
	}
}
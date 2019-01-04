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
	getList(){

	}
}
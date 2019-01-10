import axios from '@/constants/axios'
import config from '@/constants/config';
import types from '@/redux/types/newsTypes'
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
	getList(){

	}
}
import axios from '@/constants/axios';
import config from '@/constants/config';
import types from '@/redux/types/commonTypes';
export default {
	close(){
		return (dispatch,getState,api)=>{
			dispatch({type: types.MESSAGE_TYPE2, data: {text: ''} })
		}
	},
	show(){

	},
	del(){

	}
}
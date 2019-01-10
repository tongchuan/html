import types from '@/redux/types/newsTypeTypes'
import initStateData from '@/constants/initStateData'
export default function(state=initStateData.newsTypeInitData, action){
	// console.log(['--------', state,action.data]);
	switch (action.type) {
		case types.NEWS_TYPE_LIST_DATA:
			console.log(Object.assign({},state, action.data));
			return Object.assign({},state, action.data)
		case types.NEWS_GET_ITEM:
			return Object.assign({},state,action.data)
		case types.NEWS_GET_LIST:
			return Object.assign(state,{name: 'NEWS_GET_LIST'})
		default:
			return state
	}
}
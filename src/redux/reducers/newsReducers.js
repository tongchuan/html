import types from '@/redux/types/newsTypeTypes'
import initStateData from '@/constants/initStateData'
export default function(state=initStateData.newsStateInitData, action){
	// console.log(arguments);
	switch (action.type) {
		case types.NEWS_GET_ITEM:
			return Object.assign({},state,action.data)
		case types.NEWS_GET_LIST:
			return Object.assign(state,{name: 'NEWS_GET_LIST'})
		default:
			return state
	}
}
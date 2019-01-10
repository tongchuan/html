import types from '@/redux/types/commonTypes'
import initStateData from '@/constants/initStateData'
export default function(state=initStateData.commonStateInitData, action){
	console.log([state,action]);
	switch (action.type) {
		case types.MESSAGE_TYPE2:
			return Object.assign({},state,action.data)
		case types.MESSAGE_TYPE:
		console.log(Object.assign({},state, action.data));
			return Object.assign({},state, action.data)
		default:
			return state
	}
}
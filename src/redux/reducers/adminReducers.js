import types from '@/redux/types/adminTypes'
import initStateData from '@/constants/initStateData'
export default function(state=initStateData.adminStateInitData, action){
	switch (action.type) {
		case types.ADMIN_GET_LIST:
			return Object.assign({},state,action.data)
		case types.ADMIN_ADD:
			return Object.assign({},state,action.data)
		case types.ADMIN_MODIFY:
			return Object.assign({},state,action.data)
		case types.ADMIN_REGISTER:
			return Object.assign({},state,action.data)
		case types.ADMIN_SIGNIN:
			return Object.assign({},state,action.data)
		case types.ADMIN_ISSIGNIN:
			return Object.assign({},state,action.data)
		case types.ADMIN_SIGOUT:
			return Object.assign({},state,action.data)
		case types.ADMIN_MODIFYPWD:
			return Object.assign({},state,action.data)
		default:
			return state
	}
}

import types from '@/redux/types/alertTypes'
import initStateData from '@/constants/initStateData'
export default function(state=initStateData.alertInitData, action){
	switch (action.type) {
        case types.ALERT_SHOW_SUCCESS:
			return Object.assign({},state,action.data, {type: 'success',show: true, autoClose: false})
		case types.ALERT_SHOW_WARNING:
            return Object.assign({},state,action.data, {type: 'warning',show: true, autoClose: false})
		case types.ALERT_SHOW_DANGER:
            return Object.assign({},state,action.data, {type: 'danger',show: true, autoClose: false})
		case types.ALERT_SHOW_INFO:
            return Object.assign({},state,action.data, {type: 'info',show: true, autoClose: false})
        case types.ALERT_SHOW_SUCCESS_AUTO:
			return Object.assign({},state,action.data, {type: 'success',show: true, autoClose: true})
		case types.ALERT_SHOW_WARNING_AUTO:
            return Object.assign({},state,action.data, {type: 'warning',show: true, autoClose: true,})
		case types.ALERT_SHOW_DANGER_AUTO:
            return Object.assign({},state,action.data, {type: 'danger',show: true, autoClose: true,})
		case types.ALERT_SHOW_INFO_AUTO:
            return Object.assign({},state,action.data, {type: 'info',show: true, autoClose: true,})
        case types.ALERT_CLOSE:
            return Object.assign({},state,action.data, {type: 'success',show: false})
		default:
			return state
	}
}

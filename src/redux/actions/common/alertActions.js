import types from '@/redux/types/alertTypes';

export default {
	showAlertSuccess(data){
		return (dispatch, getState, api) => {
			dispatch({type: types.ALERT_SHOW_SUCCESS, data })
		}
	},
	showAlertWarning(data){
		return (dispatch, getState, api) => {
			dispatch({type: types.ALERT_SHOW_WARNING, data })
		}
	},
	showAlertDanger(data){
		return (dispatch, getState, api) => {
			dispatch({type: types.ALERT_SHOW_DANGER, data })
		}
	},
	showAlertInfo(data){
		return (dispatch, getState, api) => {
			dispatch({type: types.ALERT_SHOW_INFO, data })
			
		}
	},
	showAlertSuccessAutoClose(data){
		return (dispatch, getState, api) => {
			dispatch({type: types.ALERT_SHOW_SUCCESS_AUTO, data })
		}
	},
	showAlertWarningAutoClose(data){
		return (dispatch, getState, api) => {
			dispatch({type: types.ALERT_SHOW_WARNING_AUTO, data })
		}
	},
	showAlertDangerAutoClose(data){
		return (dispatch, getState, api) => {
			dispatch({type: types.ALERT_SHOW_DANGER_AUTO, data })
		}
	},
	showAlertInfoAutoClose(data){
		return (dispatch, getState, api) => {
			dispatch({type: types.ALERT_SHOW_INFO_AUTO, data })
			
		}
	},
	closeAlert(data={}){
		return (dispatch, getState, api) => {
			dispatch({type: types.ALERT_CLOSE, data })
		}
	}
	
}

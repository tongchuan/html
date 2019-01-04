export default function(store){
	return function wrapDispatchToAddLogging(next) {
		return function dispatchAndLog(action) {
			console.log('dispatching', action)
			let result = next(action)
			console.log('next state', store.getState())
			return result
		}
	}
}
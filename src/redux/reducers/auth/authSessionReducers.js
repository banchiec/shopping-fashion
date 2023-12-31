import {
	ERROR_SESSION_IN,
	SUCCESS_SESSION_OUT,
	ERROR_SESSION_OUT,
	LOADING_SESSION_OUT,
	SUCCESS_SESSION_IN,
	LOADING_SESSION_IN,
} from '../../constants/auth/authSessionConstants'

const initialState = {
	loadingSessionIn: false,
	successSessionIn: false,
	errorSessionIn: false,
	loadingSessionOut: false,
	successSessionOut: false,
	errorSessionOut: false,
	user: null,
}
export const sessionReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case LOADING_SESSION_IN:
			return {
				...state,
				loadingSessionIn: true,
				loadingSessionOut: false,
				successSessionOut: false,
				errorSessionIn: false,
				errorSessionOut: false,
			}
		case SUCCESS_SESSION_IN:
			return {
				...state,
				loadingSessionIn: false,
				loadingSessionOut: false,
				successSessionIn: true,
				successSessionOut: false,
				errorSessionIn: false,
				errorSessionOut: false,
				user: action.payload.user,
			}
		case ERROR_SESSION_IN:
			return {
				...state,
				loadingSessionIn: false,
				successSessionIn: false,
				errorSessionIn: true,
			}
		case LOADING_SESSION_OUT:
			return {
				...state,
				loadingSessionOut: true,
			}
		case SUCCESS_SESSION_OUT:
			return {
				...state,
				loadingSessionOut: false,
				loadingSessionIn: false,
				successSessionIn: false,
				successSessionOut: true,
				errorSessionIn: false,
				user: null,
			}
		case ERROR_SESSION_OUT:
			return {
				...state,
				loadingSessionOut: false,
				successSessionOut: false,
				errorSessionOut: true,
			}
		default:
			return state
	}
}

import { AuthFormSlice, AuthSlice } from "@features/authorization"
import { combineReducers } from "@reduxjs/toolkit"
import { appApi } from "@shared/api/appApi"
import { reducer as ToastReducer } from "react-redux-toastr"

export const rootReducer = combineReducers({
	[AuthSlice.name]: AuthSlice.reducer,
	[AuthFormSlice.name]: AuthFormSlice.reducer,
	toastr: ToastReducer,
	[appApi.reducerPath]: appApi.reducer,
})

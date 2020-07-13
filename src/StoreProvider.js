import React, { createContext, useReducer } from "react"
import { initialState } from "./state"
import { reducer } from "./reducer"

export const StoreContext = createContext()

const Provider = props => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return <StoreContext.Provider value={{ state, dispatch }}>
		{props.children}
	</StoreContext.Provider>
}

export default Provider
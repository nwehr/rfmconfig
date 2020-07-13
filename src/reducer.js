import { byName, applyOption, clearOption } from "./App"

export const reducer = (prevState, action) => {
	const state = [...prevState]

	switch (action.type) {
		case "APPLY_OPTION":
			{
				const { option, regName } = action.payload
				const i = state.findIndex(byName(regName))
				state[i].value = applyOption(option, state[i].value)
			}
			break
		case "CLEAR_OPTION":
			{
				const { option, regName } = action.payload
				const i = state.findIndex(byName(regName))
				state[i].value = clearOption(option, state[i].value)
			}
			break
		case "SET_REGISTER":
			{
				const { name, value } = action.payload
				const i = state.findIndex(byName(name))
				state[i].value = value
			}
			break
	}

	return state
}


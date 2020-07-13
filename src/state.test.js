import { reducer } from "./state"

const initialState = [
	{
		"name": "OpMode",
		"addr": 0x01,
		"value": 0x00,
		"options": [
			{
				"name": "SequencerOff",
				"description": "Off",
				"value": 0x1,
				"mask": 0x1,
				"shift": 7,
			},

			{
				"name": "ListenOn",
				"description": "On",
				"value": 0x1,
				"mask": 0x1,
				"shift": 6,
			},

			{
				"name": "Mode",
				"description": "Sleep mode (SLEEP)",
				"value": 0x0,
				"mask": 0x7,
				"shift": 2,
			},
			{
				"name": "Mode",
				"description": "Standby mode (STDBY)",
				"value": 0x1,
				"mask": 0x7,
				"shift": 2,
			},
			{
				"name": "Mode",
				"description": "Frequency Synthesizer mode (FS)",
				"value": 0x2,
				"mask": 0x7,
				"shift": 2,
			},
			{
				"name": "Mode",
				"description": "Transmitter mode (TX)",
				"value": 0x3,
				"mask": 0x7,
				"shift": 2,
			},
			{
				"name": "Mode",
				"description": "Receiver mode (RX)",
				"value": 0x4,
				"mask": 0x7,
				"shift": 2,
			},
		]
	}
]

test('apply option', () => {
	const setSleepMode = {
		type: "APPLY_OPTION"
		, payload: {
			option: {
				"name": "Mode",
				"description": "Sleep mode (SLEEP)",
				"value": 0x0,
				"mask": 0x7,
				"shift": 2,
			}
			, regName: "OpMode"
		}
	}

	const setStandbyMode = {
		type: "APPLY_OPTION"
		, payload: {
			option: {
				"name": "Mode",
				"description": "Standby mode (STDBY)",
				"value": 0x1,
				"mask": 0x7,
				"shift": 2,
			}
			, regName: "OpMode"
		}
	}

	const setFSMode = {
		type: "APPLY_OPTION"
		, payload: {
			option: {
				"name": "Mode",
				"description": "Frequency Synthesizer mode (FS)",
				"value": 0x2,
				"mask": 0x7,
				"shift": 2,
			}
			, regName: "OpMode"
		}
	}

	const setTXMode = {
		type: "APPLY_OPTION"
		, payload: {
			option: {
				"name": "Mode",
				"description": "Transmitter mode (TX)",
				"value": 0x3,
				"mask": 0x7,
				"shift": 2,
			}
			, regName: "OpMode"
		}
	}

	const setRXMode = {
		type: "APPLY_OPTION"
		, payload: {
			option: {
				"name": "Mode",
				"description": "Receiver mode (RX)",
				"value": 0x4,
				"mask": 0x7,
				"shift": 2,
			}
			, regName: "OpMode"
		}
	}

	let state = reducer(initialState, setSleepMode)
	expect(state[0].value).toBe(0x0)

	state = reducer(initialState, setStandbyMode)
	expect(state[0].value).toBe(0x4)

	state = reducer(initialState, setFSMode)
	expect(state[0].value).toBe(0x8)

	state = reducer(initialState, setTXMode)
	expect(state[0].value).toBe(0xc)

	state = reducer(initialState, setRXMode)
	expect(state[0].value).toBe(0x10)
})
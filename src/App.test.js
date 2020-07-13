import React from 'react';
import { render } from '@testing-library/react';
import App, { groupOptionsByName, applyOption, clearOption, hasOption, byName } from './App';

const opmode = {
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

test('group options by name', () => {
	const expectedOptions = {
		"SequencerOff": [
			{
				"name": "SequencerOff",
				"description": "Off",
				"value": 0x1,
				"mask": 0x1,
				"shift": 7,
			},
		]
		, "ListenOn": [
			{
				"name": "ListenOn",
				"description": "On",
				"value": 0x1,
				"mask": 0x1,
				"shift": 6,
			},
		]
		, "Mode": [
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

	const options = groupOptionsByName(opmode.options)
	expect(options).toStrictEqual(expectedOptions)
})

test('apply option to register', () => {
	const tt = [
		{
			"option": {
				"name": "SequencerOff",
				"description": "Off",
				"value": 0x1,
				"mask": 0x1,
				"shift": 7,
			}
			, "reg": 0x00
			, "expect": 0x80
		},
		{
			"option": {
				"name": "SequencerOff",
				"description": "Off",
				"value": 0x1,
				"mask": 0x1,
				"shift": 7,
			}
			, "reg": 0x00
			, "expect": 0x80
		},
		{
			"option": {
				"name": "Mode",
				"description": "Standby mode (STDBY)",
				"value": 0x1,
				"mask": 0x7,
				"shift": 2,
			}
			, "reg": 0x00
			, "expect": 0x04
		},
		{
			"option": {
				"name": "Mode",
				"description": "Standby mode (STDBY)",
				"value": 0x1,
				"mask": 0x7,
				"shift": 2,
			}
			, "reg": 0x1c
			, "expect": 0x04
		},
		{
			"option": {
				"name": "Mode",
				"description": "Sleep mode (SLEEP)",
				"value": 0x0,
				"mask": 0x7,
				"shift": 2,
			}
			, "reg": 0x1c
			, "expect": 0x00
		},
	]

	for (const t of tt) {
		const reg = applyOption(t.option, t.reg)
		expect(reg).toBe(t.expect)
	}
})

test('clear option from register', () => {
	const option = {
		"name": "SequencerOff",
		"description": "Off",
		"value": 0x1,
		"mask": 0x1,
		"shift": 7,
	}

	const reg = clearOption(option, 0x80)

	expect(reg).toBe(0x00)
})

test('sets max option', () => {
	const option = {
		"name": "RandomOption",
		"description": "0x0 - 0x3",
		"value": 0x4,
		"mask": 0x3,
		"range": [0x0, 0x3],
		"shift": 0,
	}

	const reg = applyOption(option, 0x00)

	expect(reg).toBe(0x03)
})

test('sets min option', () => {
	const option = {
		"name": "RandomOption",
		"description": "0x0 - 0x3",
		"value": 0x1,
		"mask": 0x3,
		"range": [0x2, 0x3],
		"shift": 0,
	}

	const reg = applyOption(option, 0x00)

	expect(reg).toBe(0x2)
})

describe('register has option', () => {
	const tt = [
		{
			option: {
				"name": "Mode",
				"description": "Sleep mode (SLEEP)",
				"value": 0x0,
				"mask": 0x7,
				"shift": 2,
			}
			, reg: 0x04
			, expect: false
		},
		{
			option: {
				"name": "Mode",
				"description": "Standby mode (STDBY)",
				"value": 0x1,
				"mask": 0x7,
				"shift": 2,
			}
			, reg: 0x04
			, expect: true
		},
		{
			option: {
				"name": "Mode",
				"description": "Frequency Synthesizer mode (FS)",
				"value": 0x2,
				"mask": 0x7,
				"shift": 2,
			}
			, reg: 0x04
			, expect: false
		},
		{
			option: {
				"name": "Mode",
				"description": "Transmitter mode (TX)",
				"value": 0x3,
				"mask": 0x7,
				"shift": 2,
			}
			, reg: 0x04
			, expect: false
		},
		{
			option: {
				"name": "Mode",
				"description": "Receiver mode (RX)",
				"value": 0x4,
				"mask": 0x7,
				"shift": 2,
			}
			, reg: 0x04
			, expect: false
		},
	]

	for (const t of tt) {
		test(t.option.description, () => {
			const result = hasOption(t.option, t.reg)
			expect(result).toBe(t.expect)
		})
	}
})

test('find by name', () => {
	const expectedOption = {
		"name": "ListenOn",
		"description": "On",
		"value": 0x1,
		"mask": 0x1,
		"shift": 6,
	}

	expect(opmode.options.find(byName("ListenOn"))).toStrictEqual(expectedOption)
})
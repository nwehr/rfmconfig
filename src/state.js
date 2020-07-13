export const initialState = [
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
	},
	{
		"name": "DateModul",
		"addr": 0x02,
		"value": 0x00,
		"options": [
			{
				"name": "DataMode",
				"description": "Packet mode",
				"value": 0x0,
				"mask": 0x3,
				"shift": 5,
			},
			{
				"name": "DataMode",
				"description": "Continuous mode w/ bit sync",
				"value": 0x2,
				"mask": 0x3,
				"shift": 5,
			},
			{
				"name": "DataMode",
				"description": "Continuous mode w/o bit sync",
				"value": 0x3,
				"mask": 0x3,
				"shift": 5,
			},

			{
				"name": "ModulationType",
				"description": "FSK",
				"value": 0x0,
				"mask": 0x3,
				"shift": 3,
			},
			{
				"name": "ModulationType",
				"description": "OOK",
				"value": 0x1,
				"mask": 0x3,
				"shift": 3,
			},

			{
				"name": "ModulationShaping",
				"description": "FSK: Gaussian filter, BT = 1.0; OOK: filtering with fcutoff = BR",
				"value": 0x1,
				"mask": 0x3,
				"shift": 0,
			},
			{
				"name": "ModulationShaping",
				"description": "FSK: Gaussian filter, BT = 0.5; OOK: filtering with fcutoff = 2*BR",
				"value": 0x2,
				"mask": 0x3,
				"shift": 0,
			},
			{
				"name": "ModulationShaping",
				"description": "FSK: Gaussian filter, BT = 0.3; OOK: reserved",
				"value": 0x3,
				"mask": 0x3,
				"shift": 0,
			},
		]
	},
	{
		"name": "BitrateMsb",
		"addr": 0x03,
		"value": 0x1a,
	},
	{
		"name": "BitrateLsb",
		"addr": 0x04,
		"value": 0x0b,
	},
	{
		"name": "FdevMsb",
		"addr": 0x05,
		"value": 0x00,
	},
	{
		"name": "FdevLsb",
		"addr": 0x06,
		"value": 0x52,
	},
	{
		"name": "FrfMsb",
		"addr": 0x07,
		"value": 0xe4,
	},
	{
		"name": "FrfMid",
		"addr": 0x08,
		"value": 0xc0,
	},
	{
		"name": "FrfLsb",
		"addr": 0x09,
		"value": 0x00,
	},
	{
		"name": "AfcCtrl",
		"addr": 0x0B,
		"value": 0x00,
		"options": [
			{
				"name": "AfcLowBetaOn",
				"description": "Standard AFC routine",
				"value": 0x0,
				"mask": 0x1,
				"shift": 5,
			},
			{
				"name": "AfcLowBetaOn",
				"description": "Improved AFC routine",
				"value": 0x1,
				"mask": 0x1,
				"shift": 5,
			},
		]
	},
	{
		"name": "PaLevel",
		"addr": 0x11,
		"value": 0x9f,
		"options": [
			{
				"name": "Pa0On",
				"description": "Enables PA0, connected to RFIO and LNA",
				"value": 0x1,
				"mask": 0x1,
				"shift": 7,
			},
			{
				"name": "Pa1On",
				"description": "Enables PA1, on PA_BOOST pin",
				"value": 0x1,
				"mask": 0x1,
				"shift": 6,
			},
			{
				"name": "Pa2On",
				"description": "Enables PA2, on PA_BOOST pin",
				"value": 0x1,
				"mask": 0x1,
				"shift": 5,
			},
			{
				"name": "OutputPower",
				"description": "Output power setting, with 1 dB steps",
				"value": 0x1f,
				"mask": 0x1f,
				"shift": 0,
				"range": [0x00, 0x1f]
			},

		]
	},
	{
		"name": "PaRamp",
		"addr": 0x12,
		"value": 0x00,
		"options": [
			{
				"name": "PaRamp",
				"description": "3.4 ms",
				"value": 0x0,
				"mask": 0xf,
				"shift": 0,
			},
			{
				"name": "PaRamp",
				"description": "2 ms",
				"value": 0x01,
				"mask": 0xf,
				"shift": 0,
			},
			{
				"name": "PaRamp",
				"description": "1 ms",
				"value": 0x02,
				"mask": 0xf,
				"shift": 0,
			},
			{
				"name": "PaRamp",
				"description": "500 us",
				"value": 0x03,
				"mask": 0xf,
				"shift": 0,
			},
			{
				"name": "PaRamp",
				"description": "250 us",
				"value": 0x04,
				"mask": 0xf,
				"shift": 0,
			},
			{
				"name": "PaRamp",
				"description": "125 us",
				"value": 0x05,
				"mask": 0xf,
				"shift": 0,
			},
			{
				"name": "PaRamp",
				"description": "100 us",
				"value": 0x06,
				"mask": 0xf,
				"shift": 0,
			},
			{
				"name": "PaRamp",
				"description": "62 us",
				"value": 0x07,
				"mask": 0xf,
				"shift": 0,
			},
			{
				"name": "PaRamp",
				"description": "50 us",
				"value": 0x08,
				"mask": 0xf,
				"shift": 0,
			},
			{
				"name": "PaRamp",
				"description": "40 us",
				"value": 0x09,
				"mask": 0xf,
				"shift": 0,
			},
			{
				"name": "PaRamp",
				"description": "31 us",
				"value": 0x0a,
				"mask": 0xf,
				"shift": 0,
			},
			{
				"name": "PaRamp",
				"description": "25 ms",
				"value": 0x0b,
				"mask": 0xf,
				"shift": 0,
			},
			{
				"name": "PaRamp",
				"description": "20 us",
				"value": 0x0c,
				"mask": 0xf,
				"shift": 0,
			},
			{
				"name": "PaRamp",
				"description": "15 us",
				"value": 0x0d,
				"mask": 0xf,
				"shift": 0,
			},
			{
				"name": "PaRamp",
				"description": "12 us",
				"value": 0x0e,
				"mask": 0xf,
				"shift": 0,
			},
			{
				"name": "PaRamp",
				"description": "10 us",
				"value": 0x0f,
				"mask": 0xf,
				"shift": 0,
			},
		]
	},
	{
		"name": "Ocp",
		"addr": 0x13,
		"value": 0x1a,
		"options": [
			{
				"name": "OcpOn",
				"description": "OCP enabled",
				"value": 0x1,
				"mask": 0x1,
				"shift": 4,
			},
			{
				"name": "OcpTrim",
				"description": "Trimming of OCP current: Imax = 45 + 5 - OcpTrim mA",
				"value": 0x0a,
				"mask": 0xf,
				"shift": 0,
				"range": [0x0, 0xf],
			},
		]
	},
	{
		"name": "Lna",
		"addr": 0x18,
		"value": 0x88,
		"options": [
			{
				"name": "LnaZin",
				"description": "200 ohms",
				"value": 0x1,
				"mask": 0x1,
				"shift": 7,
			},
			{
				"name": "LnaGainSelect",
				"description": "highest gain",
				"value": 0x01,
				"mask": 0x7,
				"shift": 0,
			},
			{
				"name": "LnaGainSelect",
				"description": "highest gain - 6 dB",
				"value": 0x02,
				"mask": 0x7,
				"shift": 0,
			},
			{
				"name": "LnaGainSelect",
				"description": "highest gain - 12 dB",
				"value": 0x03,
				"mask": 0x7,
				"shift": 0,
			},
			{
				"name": "LnaGainSelect",
				"description": "highest gain - 24 dB",
				"value": 0x04,
				"mask": 0x7,
				"shift": 0,
			},
			{
				"name": "LnaGainSelect",
				"description": "highest gain - 36 dB",
				"value": 0x05,
				"mask": 0x7,
				"shift": 0,
			},
			{
				"name": "LnaGainSelect",
				"description": "highest gain - 48 dB",
				"value": 0x06,
				"mask": 0x7,
				"shift": 0,
			},
		]
	},
	{
		"name": "RxBw",
		"addr": 0x19,
		"value": 0x55,
		"options": [
			{
				"name": "DccFreq",
				"description": "Cut-off freq of the DC offset canceller",
				"value": 0x2,
				"mask": 0x7,
				"shift": 5,
				"range": [0x0, 0x7],
			},

			{
				"name": "RxBwMant",
				"description": "16",
				"value": 0x0,
				"mask": 0x3,
				"shift": 3,
			},
			{
				"name": "RxBwMant",
				"description": "20",
				"value": 0x1,
				"mask": 0x3,
				"shift": 3,
			},
			{
				"name": "RxBwMant",
				"description": "24",
				"value": 0x2,
				"mask": 0x3,
				"shift": 3,
			},

			{
				"name": "RxBwExp",
				"description": "Channel filter bandwidth control",
				"value": 0x05,
				"mask": 0x7,
				"shift": 0,
				"range": [0x0, 0x7],
			},
		]

	},
	{
		"name": "AfcBw",
		"addr": 0x1a,
		"value": 0x8b,
		"options": [
			{
				"name": "DccFreqAfc",
				"description": "DccFreq parameter used during the AFC",
				"value": 0x4,
				"mask": 0x7,
				"shift": 5,
				"range": [0x0, 0x7],
			},
			{
				"name": "RxBwMantAfc",
				"description": "RxBwMant parameter used during the AFC",
				"value": 0x1,
				"mask": 0x3,
				"shift": 3,
				"range": [0x0, 0x3]
			},
			{
				"name": "RxBwExpAfc",
				"description": "RxBwExp parameter used during the AFC",
				"value": 0x3,
				"mask": 0x7,
				"shift": 0,
				"range": [0x0, 0x7],
			},
		]
	},
	{
		"name": "AfcFei",
		"addr": 0x1E,
		"value": 0x10,
		"options": [
			{
				"name": "AfcAutoclearOn",
				"description": "Only valid if AfcAutoOn is set; AFC register is cleared before a new AFC phase",
				"value": 0x1,
				"mask": 0x1,
				"shift": 3,
			},
			{
				"name": "AfcAutoOn",
				"description": "AFC is performed each time Rx mode is entered",
				"value": 0x1,
				"mask": 0x1,
				"shift": 2,
			},
		]
	},
	{
		"name": "RssiThresh",
		"addr": 0x29,
		"value": 0xe4
	},
	{
		"name": "PreambleMsb",
		"addr": 0x2c,
		"value": 0x00,
	},
	{
		"name": "PreambleLsb",
		"addr": 0x2c,
		"value": 0x0a,
	},
	{
		"name": "SyncConfig",
		"addr": 0x2E,
		"value": 0x98,
		"options": [
			{
				"name": "SyncOn",
				"description": "Enables the Sync word generation and detection",
				"value": 0x1,
				"mask": 0x1,
				"shift": 7,
			},
			{
				"name": "SyncSize",
				"description": "Size of the Sync word: (SyncSize + 1) bytes",
				"value": 0x3,
				"mask": 0x7,
				"shift": 3,
				"range": [0x0, 0x7],
			},
			{
				"name": "SyncTol",
				"description": "Number of tolerated bit errors in Sync word",
				"value": 0x0,
				"mask": 0x7,
				"shift": 0,
				"range": [0x0, 0x7],
			},
		]
	},
	{
		"name": "SyncValue1",
		"addr": 0x2f,
		"value": 0x2b,
	},
	{
		"name": "SyncValue2",
		"addr": 0x30,
		"value": 0x2a,
	},
	{
		"name": "SyncValue3",
		"addr": 0x31,
		"value": 0x00,
	},
	{
		"name": "SyncValue4",
		"addr": 0x32,
		"value": 0x00,
	},
	{
		"name": "SyncValue5",
		"addr": 0x33,
		"value": 0x00,
	},
	{
		"name": "SyncValue6",
		"addr": 0x34,
		"value": 0x00,
	},
	{
		"name": "SyncValue7",
		"addr": 0x35,
		"value": 0x00,
	},
	{
		"name": "SyncValue8",
		"addr": 0x36,
		"value": 0x00,
	},
	{
		"name": "PacketConfig1",
		"addr": 0x37,
		"value": 0x90,
		"options": [
			{
				"name": "PacketFormat",
				"description": "Fixed length",
				"value": 0x0,
				"mask": 0x1,
				"shift": 7,
			},
			{
				"name": "PacketFormat",
				"description": "Variable length",
				"value": 0x1,
				"mask": 0x1,
				"shift": 7,
			},

			{
				"name": "DcFree",
				"description": "Manchester",
				"value": 0x1,
				"mask": 0x3,
				"shift": 5,
			},
			{
				"name": "DcFree",
				"description": "Whitening",
				"value": 0x2,
				"mask": 0x3,
				"shift": 5,
			},

			{
				"name": "CrcOn",
				"description": "On",
				"value": 0x1,
				"mask": 0x1,
				"shift": 4,
			},

			{
				"name": "CrcAutoClearOff",
				"description": "Do not clear FIFO. PayloadReady interrupt issued.",
				"value": 0x1,
				"mask": 0x1,
				"shift": 3,
			},

			{
				"name": "AddressFiltering",
				"description": "Address field must match NodeAddress",
				"value": 0x1,
				"mask": 0x3,
				"shift": 1,
			},
			{
				"name": "AddressFiltering",
				"description": "Address field must match NodeAddress or BroadcastAddress",
				"value": 0x2,
				"mask": 0x3,
				"shift": 1,
			},
		]
	},
	{
		"name": "PayloadLength",
		"addr": 0x38,
		"value": 0x40,
	},
	{
		"name": "NodeAdrs",
		"addr": 0x39,
		"value": 0xff,
	},
	{
		"name": "BroadcastAdrs",
		"addr": 0x3a,
		"value": 0xff,
	},
	{
		"name": "AutoModes",
		"addr": 0x3b,
		"value": 0x00,
		"options": [
			{
				"name": "EnterCondition",
				"description": "None (AutoModes off)",
				"value": 0x0,
				"mask": 0x7,
				"shift": 5,
			},
			{
				"name": "EnterCondition",
				"description": "Rising edge of FifoNotEmpty",
				"value": 0x1,
				"mask": 0x7,
				"shift": 5,
			},
			{
				"name": "EnterCondition",
				"description": "Rising edge of FifoLevel",
				"value": 0x2,
				"mask": 0x7,
				"shift": 5,
			},
			{
				"name": "EnterCondition",
				"description": "Rising edge of CrcOk",
				"value": 0x3,
				"mask": 0x7,
				"shift": 5,
			},
			{
				"name": "EnterCondition",
				"description": "Rising edge of PayloadReady",
				"value": 0x4,
				"mask": 0x7,
				"shift": 5,
			},
			{
				"name": "EnterCondition",
				"description": "Rising edge of SyncAddress",
				"value": 0x5,
				"mask": 0x7,
			},
			{
				"name": "EnterCondition",
				"description": "Rising edge of PacketSent",
				"value": 0x6,
				"mask": 0x7,
				"shift": 5,
			},
			{
				"name": "EnterCondition",
				"description": "Falling edge of FifoNotEmpty (FIFO empty)",
				"value": 0x7,
				"mask": 0x7,
				"shift": 5,
			},


			{
				"name": "ExitCondition",
				"description": "None (AutoModes off)",
				"value": 0x0,
				"mask": 0x7,
				"shift": 2,
			},
			{
				"name": "ExitCondition",
				"description": "Falling edge of FifoNotEmpty (FIFO empty)",
				"value": 0x1,
				"mask": 0x7,
				"shift": 2,
			},
			{
				"name": "ExitCondition",
				"description": "Rising edge of FifoLevel or Timeout",
				"value": 0x2,
				"mask": 0x7,
				"shift": 2,
			},
			{
				"name": "ExitCondition",
				"description": "Rising edge of CrcOk or Timeout",
				"value": 0x3,
				"mask": 0x7,
				"shift": 2,
			},
			{
				"name": "ExitCondition",
				"description": "Rising edge of PayloadReady or Timeout",
				"value": 0x4,
				"mask": 0x7,
				"shift": 2,
			},
			{
				"name": "ExitCondition",
				"description": "Rising edge of SyncAddress or Timeout",
				"value": 0x5,
				"mask": 0x7,
				"shift": 2,
			},
			{
				"name": "ExitCondition",
				"description": "Rising edge of PacketSent",
				"value": 0x6,
				"mask": 0x7,
				"shift": 2,
			},
			{
				"name": "ExitCondition",
				"description": "Rising edge of Timeout",
				"value": 0x7,
				"mask": 0x7,
				"shift": 2,
			},

			{
				"name": "IntermediateMode",
				"description": "Sleep mode (SLEEP)",
				"value": 0x0,
				"mask": 0x3,
			},
			{
				"name": "IntermediateMode",
				"description": "Standby mode (STDBY)",
				"value": 0x1,
				"mask": 0x3,
				"shift": 0,
			},
			{
				"name": "IntermediateMode",
				"description": "Receiver mode (RX)",
				"value": 0x2,
				"mask": 0x3,
				"shift": 0,
			},
			{
				"name": "IntermediateMode",
				"description": "Transmitter mode (TX)",
				"value": 0x3,
				"mask": 0x3,
				"shift": 0,
			},
		]
	},
	{
		"name": "FifoThresh",
		"addr": 0x3C,
		"value": 0x8f,
		"options": [
			{
				"name": "TxStartCondition",
				"description": "FifoNotEmpty (i.e. at least one byte in the FIFO)",
				"value": 0x1,
				"mask": 0x1,
				"shift": 7,
			},
			{
				"name": "FifoThreshold",
				"description": "Used to trigger FifoLevel interrupt",
				"value": 0x0f,
				"mask": 0x7f,
				"shift": 0,
				"range": [0x00, 0x7f],
			},
		]
	},
	{
		"name": "PacketConfig2",
		"addr": 0x3D,
		"value": 0x02,
		"options": [
			{
				"name": "InterPacketRxDelay",
				"description": "After PayloadReady occurred, defines the delay between FIFO empty and the start of a new RSSI phase for next packet",
				"value": 0x0,
				"mask": 0xf,
				"shift": 4,
				"range": [0x0, 0xf],
			},
			{
				"name": "AutoRxRestartOn",
				"description": "Rx automatically restarted after InterPacketRxDelay",
				"value": 0x1,
				"mask": 0x1,
				"shift": 1,
			},
			{
				"name": "AesOn",
				"description": "Enable the AES encryption/decryption",
				"value": 0x1,
				"mask": 0x1,
				"shift": 0,
			},
		]
	},
	{
		"name": "AesKey1",
		"addr": 0x3e,
		"value": 0x00,
	},
	{
		"name": "AesKey2",
		"addr": 0x3f,
		"value": 0x00,
	},
	{
		"name": "AesKey3",
		"addr": 0x40,
		"value": 0x00,
	},
	{
		"name": "AesKey4",
		"addr": 0x41,
		"value": 0x00,
	},
	{
		"name": "TestLna",
		"addr": 0x58,
		"value": 0x1b,
		"options": [
			{
				"name": "SensitivityBoost",
				"description": "Normal mode",
				"value": 0x1b,
				"mask": 0xff,
				"shift": 0,
			},
			{
				"name": "SensitivityBoost",
				"description": "High sensitivity mode",
				"value": 0x2b,
				"mask": 0xff,
				"shift": 0,
			},
		]
	},
	{
		"name": "TestPa1",
		"addr": 0x5A,
		"value": 0x55,
		"options": [
			{
				"name": "Pa20dBm1",
				"description": "Normal mode",
				"value": 0x55,
				"mask": 0xff,
				"shift": 0,
			},
			{
				"name": "Pa20dBm1",
				"description": "+20 dBm mode",
				"value": 0x5d,
				"mask": 0xff,
				"shift": 0,
			},
		]
	},
	{
		"name": "TestPa2",
		"addr": 0x5C,
		"value": 0x70,
		"options": [
			{
				"name": "Pa20dBm2",
				"description": "Normal mode",
				"value": 0x70,
				"mask": 0xff,
				"shift": 0,
			},
			{
				"name": "Pa20dBm2",
				"description": "+20 dBm mode",
				"value": 0x7c,
				"mask": 0xff,
				"shift": 0,
			},
		]
	},
	{
		"name": "TestDagc",
		"addr": 0x6F,
		"value": 0x30,
		"options": [
			{
				"name": "ContinuousDagc",
				"description": "Normal mode",
				"value": 0x00,
				"mask": 0xff,
				"shift": 0,
			},
			{
				"name": "ContinuousDagc",
				"description": "Improved margin, use if AfcLowBetaOn=1",
				"value": 0x20,
				"mask": 0xff,
				"shift": 0,
			},
			{
				"name": "ContinuousDagc",
				"description": "Improved margin, use if AfcLowBetaOn=0",
				"value": 0x30,
				"mask": 0xff,
				"shift": 0,
			},
		]
	},
	{
		"name": "TestAfc",
		"addr": 0x71,
		"value": 0x00,
	},
]

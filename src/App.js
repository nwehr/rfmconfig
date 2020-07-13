import React, { useContext, createContext } from 'react';
import { StoreContext } from "./state"
import './App.css';

const RegisterContext = createContext()

const App = props => {
    const { state } = useContext(StoreContext)

    return <div>
        {
            state.map(r => <Register reg={r} key={r.name} />)
        }
        <pre>
            {
                JSON.stringify(state, ["name", "addr", "value"], '\t')
            }
        </pre>
    </div>
}

const Register = props => {
    const { reg } = props
    const { dispatch } = useContext(StoreContext)
    const options = groupOptionsByName(reg.options ? reg.options : [])

    const handleChange = e => {
        dispatch({ type: "SET_REGISTER", payload: { name: reg.name, value: parseInt(e.currentTarget.value, 16) } })
    }

    return <RegisterContext.Provider value={reg}>
        <div className="register">
            <h1>{reg.name}</h1>
            0x<input type="text" value={reg.value.toString(16)} onChange={handleChange} />
            {
                options
                    ? Object.keys(options).map(name => <OptionList name={name} options={options[name]} key={uuidv4()} />)
                    : null
            }
        </div>
    </RegisterContext.Provider>
}

const OptionList = props => {
    const { name, options } = props

    return <div>
        <h3>{name}</h3>
        {
            options.map(o => <Option option={o} key={uuidv4()} />)
        }
    </div>
}

const Option = props => {
    const { option } = props

    if (option.range) {
        return <TextOption option={option} />
    }

    return <CheckboxOption option={option} />
}

const CheckboxOption = props => {
    const reg = useContext(RegisterContext)
    const { dispatch } = useContext(StoreContext)
    const { option } = props

    const uuid = uuidv4()

    const checked = hasOption(option, reg.value)

    const handleChange = e => {
        if (e.currentTarget.checked) {
            dispatch({ type: "APPLY_OPTION", payload: { option, regName: reg.name } })
        } else {
            dispatch({ type: "CLEAR_OPTION", payload: { option, regName: reg.name } })
        }
    }

    return <div>
        <input type="checkbox" id={uuid} value={option.value} checked={checked} onChange={handleChange} />
        <label htmlFor={uuid}>{option.description}</label>
    </div>
}

const TextOption = props => {
    const reg = useContext(RegisterContext)
    const { dispatch } = useContext(StoreContext)
    const { option } = props

    const uuid = uuidv4()

    const handleChange = e => {
        option.value = parseInt(e.currentTarget.value, 16)
        dispatch({ type: "APPLY_OPTION", payload: { option, regName: reg.name } })
    }

    return <div>
        0x<input type="text" name={uuid} value={option.value.toString(16)} onChange={handleChange} /><br />
        <label htmlFor={uuid}>{option.description}</label><br />
    </div>
}

export const groupOptionsByName = options => {
    const m = {}

    for (let opt of options) {
        if (!m[opt.name]) {
            m[opt.name] = [opt]
        } else {
            m[opt.name].push(opt)
        }
    }

    return m
}

export const applyOption = (option, regValue) => {
    if (option.range) {
        const [min, max] = option.range

        if (option.value > max) {
            option.value = max
        }

        if (option.value < min) {
            option.value = min
        }
    }

    const optionValue = (option.value << option.shift)

    return clearOption(option, regValue) | optionValue
}

export const clearOption = (option, regValue) => {
    const optionMask = (option.mask << option.shift)
    return regValue & ~optionMask
}

export const hasOption = (option, regValue) => {
    const optionValue = (option.value << option.shift)
    const optionMask = (option.mask << option.shift)

    return (regValue & optionMask) == optionValue
}

export const byName = (name) => (item) => item.name === name

const uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


export default App;

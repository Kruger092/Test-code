import React from 'react'
import Select from 'react-select'
import './Options.css'

const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
]

export const Options = ({ color, setColor }) => {

    return (
        <Select
            options={options}
            value={color}
            onChange={setColor}
            defaultValue={options[1]}
        />
    )

}